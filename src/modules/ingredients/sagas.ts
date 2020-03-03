import { all, takeEvery, call, put } from 'redux-saga/effects';
import { message as MessageManager } from 'antd';
import servicesApi from './services';
import actions from './actions';

function* load() {
  try {
    const result = yield call(servicesApi.list);

    // success
    if (!result.isAxiosError) {
      yield put(actions.loadSuccess(result));
      return;
    }

    // error
    const { message } = result;
    yield put(actions.loadError({ error: message }));

    if (result.response && result.response.status === 401) {
      MessageManager.error('Session expired please login again');
    }
  } catch (error) {
    yield put(actions.loadError(error));
  }
}

function* saveToApi({ payload }: any) {
  const { data, actionName } = payload;

  const { id } = data;

  let result = null;
  try {
    switch (actionName) {
      case 'update':
        result = yield call(servicesApi.update, id, data);
        setTimeout(() => MessageManager.success('Updated'), 500);
        break;

      case 'delete':
        result = yield call(servicesApi.delete, id);
        setTimeout(() => MessageManager.success('Deleted'), 500);
        break;

      default:
        // insert
        result = yield call(servicesApi.create, data);
        setTimeout(() => MessageManager.success('Created'), 500);
        break;
    }

    // success
    if (!result.isAxiosError) {
      yield put({ type: actions.LOAD });
      return;
    }

    // error
    const { message } = result;
    yield put(actions.loadError({ error: message }));

    if (result.response && result.response.status === 401) {
      MessageManager.error('Session expired please login again');
    }
  } catch (error) {
    yield put(actions.loadError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOAD, load), takeEvery(actions.SAVE_TO_API, saveToApi)]);
}

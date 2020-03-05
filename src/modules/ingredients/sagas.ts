import { all, takeEvery, call, put } from 'redux-saga/effects';
import { message as MessageManager } from 'antd';
import servicesApi from './services';
import actions from './actions';

function* crudToApi({ payload }: any) {
  const { data, actionName } = payload;
  const id = data ? data.id : 0;
  let result = null;

  try {
    switch (actionName) {
      case 'CREATE':
        result = yield call(servicesApi.create, data);
        break;

      case 'READ':
        result = yield call(servicesApi.list);
        break;

      case 'UPDATE':
        result = yield call(servicesApi.update, id, data);
        break;

      case 'DELETE':
        result = yield call(servicesApi.delete, id);
        break;
    }

    // success
    if (!result.isAxiosError) {
      if (actionName === 'READ') {
        yield put(actions.onLoadSuccess(result.itens));
      } else {
        yield put({ type: actions.CRUD_API, payload: { actionName: 'READ' } });
        setTimeout(() => MessageManager.success(actionName), 500);
      }
      return;
    }

    // error
    const { message } = result;
    yield put(actions.onLoadError({ error: message }));
    setTimeout(() => MessageManager.error(message), 500);

  } catch (error) {
    yield put(actions.onLoadError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.CRUD_API, crudToApi)]);
}

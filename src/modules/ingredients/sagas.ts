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
        setTimeout(() => MessageManager.success('Created'), 500);
        break;

      case 'READ':
        result = yield call(servicesApi.list);
        break;

      case 'UPDATE':
        result = yield call(servicesApi.update, id, data);
        setTimeout(() => MessageManager.success('Updated'), 500);
        break;

      case 'DELETE':
        result = yield call(servicesApi.delete, id);
        setTimeout(() => MessageManager.success('Deleted'), 500);
        break;
    }

    // success
    if (!result.isAxiosError) {
      if (actionName === 'READ') {
        console.log(result);
        yield put(actions.loadSuccess(result.itens)); //{ type: actions.loadSuccess, payload: { actionName: 'READ' } }
      } else {
        yield put({ type: actions.CRUD_API, payload: { actionName: 'READ' } });
      }
      return;
    }

    // error
    const { message } = result;
    yield put(actions.loadError({ error: message }));
  } catch (error) {
    yield put(actions.loadError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.CRUD_API, crudToApi)]);
}

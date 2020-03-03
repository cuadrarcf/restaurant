import { all } from 'redux-saga/effects';
import ingredientSagas from '../modules/ingredients/sagas';
// import orderSagas from '../modules/orders/sagas'
// import recipeSagas from '../modules/recipes/sagas'

export function mergeSagas() {
  const allSagasArray = [ingredientSagas()];

  return function* rootSaga() {
    yield all(allSagasArray);
  };
}

import { applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createSagaMiddleware, { Saga } from 'redux-saga';

export function createAppStore(reducers: object, rootSaga: Saga) {

  const history = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);
  const middlewares = [thunk, sagaMiddleware, routeMiddleware];

  const composeEnhancers =
    // @ts-ignore
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose;

  const store = createStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history)
    }),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);
  return {
    store,
    history,
  };
}

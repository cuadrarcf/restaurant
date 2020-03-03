/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

export default function createAppStore(reducers, rootSaga) {

  const history = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);
  const middlewares = [thunk, sagaMiddleware, routeMiddleware];

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
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


// OLD DELETE
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { createBrowserHistory } from "history";
// import { connectRouter, routerMiddleware } from "connected-react-router";
// import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
//
// import getReducers from "./reducers";
// import rootSaga from "../sagas/sagas";
//
//
// const history = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();
// const routeMiddleware = routerMiddleware(history);
// const middlewares = [thunk, sagaMiddleware, routeMiddleware];
//
// const composeEnhancers =
//     typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         })
//         : compose;
//
// const store = createStore(
//     combineReducers({
//         ...getReducers(),
//         router: connectRouter(history)
//     }),
//     composeEnhancers(applyMiddleware(...middlewares))
// );
//
// sagaMiddleware.run(rootSaga);
//
// export {
//     store,
//     history,
// };

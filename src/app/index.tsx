import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { createAppStore } from './store';
import { Dashboard } from '../modules/dashboard';
import { Orders } from '../modules/orders';
import IngredientsContainer from '../modules/ingredients';
import { Recipes } from '../modules/recipes';
import { LeftMenu } from './view/leftMenu';
import AppHeader from './view/header/AppHeader';
import { mergeReducers } from './reducers';
import { mergeSagas } from './sagas';
import './index.css';

const { Footer } = Layout;

const { store } = createAppStore(mergeReducers(), mergeSagas());

class App extends React.Component {

  state = {
    collapsed: false
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <LeftMenu collapsed={this.state.collapsed} onCollapse={this.onCollapse} />
            <Layout>
              <AppHeader canceled={2} inProgress={4} fulFilled={15} pending={8} />
              <Switch>
                <Route exact path="/">
                  <Redirect to="/dashboard" />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/orders">
                  <Orders />
                </Route>
                <Route path="/ingredients">
                  <IngredientsContainer />
                </Route>
                <Route path="/recipes">
                  <Recipes />
                </Route>
              </Switch>
              <Footer style={{ textAlign: 'center' }}>
                Restaurant ©2020 Created by <a href="https://www.linkedin.com/in/roberley">Roberley Cuadra.</a></Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;

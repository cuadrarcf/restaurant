import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard } from '../modules/dashboard';
import { Orders } from '../modules/orders';
import { Ingredients } from '../modules/ingredients';
import { Recipes } from '../modules/recipes';
import { LeftMenu } from './view/leftMenu';
import { Layout } from 'antd';
import AppHeader from './view/header/AppHeader';
const { Footer } = Layout;

class App extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    return (
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
                <Ingredients />
              </Route>
              <Route path="/recipes">
                <Recipes />
              </Route>
            </Switch>
            <Footer style={{ textAlign: 'center' }}>Restaurant ©2020 Created by Roberley</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;

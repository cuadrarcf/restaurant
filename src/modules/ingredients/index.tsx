import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'antd';
import { AppContent } from '../../app/view/appContent';
import { IngredientsTable } from './view/IngredientsTable';
import actions, { IActions } from './actions';
import { IReducer } from './reducers';

interface IIngredientState {}

class Ingredients extends React.Component<IReducer & IActions, IIngredientState> {

  componentDidMount(): void {
    this.props.load();
  }

  togglePopup(param: any) {
    console.log(`create Ingredient ${param}`);
  }

  render() {

    const {models, isLoading} = this.props;

    return (
      <AppContent title="Ingredients">
        <Row>
          <Col span={24}>
            <Button type="primary" onClick={event => this.togglePopup(null)}>
              Add
            </Button>
            <IngredientsTable dataSource={models} isLoading={isLoading} />
          </Col>
        </Row>
      </AppContent>
    );
  }
}

export default connect(
  (state: any) => ({
    ...state.Ingredients
  }),
  {
    ...actions
  }
)(Ingredients);

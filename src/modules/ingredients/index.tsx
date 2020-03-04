import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { AppContent } from '../../app/view/appContent';
import { IngredientsTable } from './view/IngredientsTable';
import actions, { IActions } from './actions';
import { IReducer } from './reducers';
import { AddIngredient } from './view/AddIngredient';
import './index.css';

interface IIngredientState {}

class Ingredients extends React.Component<IReducer & IActions, IIngredientState> {
  state = { visible: false };

  componentDidMount(): void {
    this.props.crudApi('READ', {});
  }

  showModal = (value: boolean) => {
    this.setState({
      visible: value
    });
  };

  togglePopup(param: any) {
    console.log(`create Ingredient ${param}`);
  }

  render() {
    const { models, isLoading } = this.props;

    return (
      <AppContent title="Ingredients">
        <Row>
          <AddIngredient isVisible={this.state.visible} onToggle={value => this.showModal(value)} />
          <Col span={24}>
            <Button type="primary" onClick={event => this.showModal(true)} className="btn-add">
              <PlusCircleOutlined /> Add
            </Button>
            <IngredientsTable
              dataSource={models}
              isLoading={isLoading}
              onAction={(action, record) => this.onAction(action, record)}
            />
          </Col>
        </Row>
      </AppContent>
    );
  }

  private onAction(action: string, record: any) {
    this.props.crudApi(action, record);
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

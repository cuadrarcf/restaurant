import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { AppContent } from '../../app/view/appContent';
import { IIngredient, IngredientsTable } from './view/IngredientsTable';
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

  showModal = (value: boolean | null) => {
    this.setState({
      visible: value
    });
  };


  render() {
    const { models, isLoading, selected } = this.props;

    console.log(selected);

    return (
      <AppContent title="Ingredients">
        <Row>
          <AddIngredient
            isVisible={this.state.visible}
            onToggle={value => this.showModal(value)}
            onOk={value => this.onAction('CREATE', value)}
          />
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

  private onAction(action: string, record: IIngredient) {
    if(action === 'SELECT'){
      this.props.updateSelected(record);
    } else {
      this.props.crudApi(action, record);
    }
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

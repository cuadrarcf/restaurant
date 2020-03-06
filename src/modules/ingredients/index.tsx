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
    this.props.onCrudApi('READ', {});
  }

  render() {
    const { models, isLoading, selected } = this.props;

    return (
      <AppContent title="Ingredients">
        <Row>
          <AddIngredient
            isVisible={selected !== null}
            onClose={() => this.props.onUpdateSelected(null)}
            onOk={value => this.onAction('CREATE', value)}
            selected={selected}
          />
          <Col span={24}>
            <Button type="primary" onClick={event => this.props.onUpdateSelected({})} className="btn-add">
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
      this.props.onUpdateSelected(record);
    } else {
      this.props.onCrudApi(action, record);
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

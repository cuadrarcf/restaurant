import React from 'react';
import { connect } from 'react-redux';
import { AppContent } from '../../app/view/appContent';
import { Button, Col, Row } from 'antd';
import { IngredientsTable } from './view/IngredientsTable';
import { items } from '../../app/services';
import actions from './actions';
import { IReducer } from './reducers';

function togglePopup(param: any) {
  console.log(param);
}

export function Ingredients() {

  return (
    <AppContent title="Ingredients">
      <Row>
        <Col span={24}>
          <Button type="primary" onClick={event => togglePopup(null)}>
            Add
          </Button>
          <IngredientsTable dataSource={items} />
        </Col>
      </Row>
    </AppContent>
  );
}

// export default connect(
//   (state: any) => ({
//     ...state.Ingredients
//   }),
//   {
//     ...actions
//   }
// )(Ingredients);

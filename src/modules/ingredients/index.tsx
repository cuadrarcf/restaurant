import React from 'react';
import { AppContent } from '../../app/view/appContent';
import { Col, Row } from 'antd';
import { IngredientsTable } from './view/IngredientsTable';
import { items } from '../../app/services';

export function Ingredients() {
  return (
    <AppContent title="Ingredients">
      <Row>
        <Col>
          <IngredientsTable dataSource={items} />
        </Col>
      </Row>
    </AppContent>
  );
}

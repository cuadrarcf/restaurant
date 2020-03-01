import React from 'react';
import { Col, Layout, Row, Statistic, Divider } from 'antd';
import './appHeader.css';

const { Header } = Layout;

interface appHeaderParams {
  canceled?: number | null;
  pending?: number | null;
  inProgress?: number | null;
  fulFilled?: number | null;
}

function AppHeader(props: appHeaderParams) {
  const { canceled, pending, inProgress, fulFilled } = props;

  return (
    <Header className="app-header">
      <Row type="flex" justify="center">
        <Divider type="vertical" />
        <Col span={4}>
          <Statistic title="Pending Orders" value={pending || 0} />
        </Col>

        <Divider type="vertical" />
        <Col span={4}>
          <Statistic title="In Progress" value={inProgress || 0} />
        </Col>

        <Divider type="vertical" />
        <Col span={4}>
          <Statistic title="Fulfilled Orders" value={fulFilled || 0} />
        </Col>

        <Divider type="vertical" />
        <Col span={4}>
          <Statistic title="Cancelled Orders" value={canceled || 0} valueStyle={{color: 'red'}} />
        </Col>

        <Divider type="vertical" />
      </Row>
    </Header>
  );
}

export default AppHeader;

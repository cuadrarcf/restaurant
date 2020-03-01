import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import './index.css';

const { Title } = Typography;
const { Content } = Layout;

interface IAppContent {
  title?: string;
  children: React.ReactNode;
}

export function AppContent(props: IAppContent) {
  const { title, children } = props;

  return (
    <Content className="app-content">
      <Row>
        <Col>
          <Title level={3}>{title}</Title>
          <article className="main-place">{children}</article>
        </Col>
      </Row>
    </Content>
  );
}

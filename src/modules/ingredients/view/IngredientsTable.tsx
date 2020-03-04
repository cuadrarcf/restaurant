import React from 'react';
import { Button, Divider, Popconfirm, Table, Tag } from 'antd';
import { MinusCircleOutlined, FormOutlined } from '@ant-design/icons';
import './ingredientsTable.css';

export interface IIngredient {
  id: number;
  name: string;
  qty: string;
  colors?: string[];
}

export interface IIngredientsProps {
  dataSource: IIngredient[];
  isLoading: boolean;
  onAction: (action: string, record: any) => void
}

function onAction(edit: string, record: any) {}

export function IngredientsTable(props: IIngredientsProps) {
  const { dataSource, isLoading, onAction } = props;

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty'
    },
    {
      title: 'Colors',
      dataIndex: 'colors',
      key: 'colors',
      render: (v: string[]) =>
        v &&
        v.map((c: string) => (
          <Tag key={c} color={c} style={{ color: 'black', borderColor: '#d9d9d9' }}>
            {c}
          </Tag>
        ))
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: (text: string, record: any) => (
        <div>
          <Button type="link" onClick={() => onAction('EDIT', record)}>
            <FormOutlined />
          </Button>
          <Divider type="vertical" />
          <Popconfirm title="Sure to delete?" onConfirm={() => onAction('DELETE', record)}>
            <Button type="link">
              <MinusCircleOutlined style={{ color: '#ffa39e' }} />
            </Button>
          </Popconfirm>
        </div>
      )
    }
  ];

  return <Table rowKey="id" dataSource={dataSource} columns={columns} loading={isLoading} />;
}

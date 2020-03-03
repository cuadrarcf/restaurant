import React from 'react';
import { Table, Tag } from 'antd';

export interface IIngredient {
  id: number;
  name: string;
  qty: string;
  colors?: string[];
}

export interface IIngredientsTable {
  dataSource: IIngredient[];
}

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Colors',
    dataIndex: 'colors',
    key: 'colors',
    render:(v: string[]) => v && v.map((c:string) => <Tag key={c} color={c} style={{color:'black', borderColor:'#d9d9d9'}}>{c}</Tag> )
  },
];

export function IngredientsTable(props: IIngredientsTable) {
  const { dataSource } = props;
  return <Table rowKey="id" dataSource={dataSource} columns={columns} />;
}


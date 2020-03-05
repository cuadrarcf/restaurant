import React from 'react';
import { Modal, Form, Input, Select, InputNumber, Tag } from 'antd';

export interface IAddProps {
  isVisible: boolean;
  onToggle: (value: boolean | null) => void;
  onOk: (value: any) => void;
}

export interface IIngredientModel {
  name: string;
  qty: number;
  color: string[];
}

const layout = {
  labelCol: { span: 8 }
};


export class AddIngredient extends React.Component<IAddProps, IIngredientModel> {
  formRef: any = React.createRef();
  state = { qty: 0, color: [], name: '', remember: true };

  onFinish = (values: any) => {
    this.props.onOk(values);
    this.props.onToggle(false);
  };

  render() {
    const { isVisible } = this.props;

    return (
      <Modal
        title="Add Ingredient"
        visible={isVisible}
        onOk={() => this.formRef.current.submit()}
        onCancel={() => this.props.onToggle(null)}
        destroyOnClose={true}
      >
        <Form {...layout} ref={this.formRef} initialValues={this.state} onFinish={this.onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Quantity" name="qty" rules={[{ required: true, message: 'Please input the Quantity!' }]}>
            <InputNumber />
          </Form.Item>

          <Form.Item label="Color" name="color" rules={[{ required: true, message: 'Please input the Color!' }]}>
            <Select style={{ width: 171 }} mode="multiple">
              <Select.Option value="blue">
                <Tag color={'blue'}>Blue</Tag>
              </Select.Option>
              <Select.Option value="red">
                <Tag color={'red'}>Red</Tag>
              </Select.Option>
              <Select.Option value="green">
                <Tag color={'green'}>Green</Tag>
              </Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

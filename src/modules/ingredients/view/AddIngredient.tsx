import React from 'react';
import { Modal, Form, Input, Select, InputNumber, Tag } from 'antd';

export interface IIngredientModel {
  id?: string;
  name: string;
  qty: number;
  colors: string[];
}


export interface IAddProps {
  isVisible: boolean;
  selected?: IIngredientModel | null;
  onClose: () => void;
  onOk: (value: any) => void;
}

const layout = {
  labelCol: { span: 8 }
};


export class AddIngredient extends React.Component<IAddProps, IIngredientModel> {
  formRef: any = React.createRef();
  state = { qty: 0, colors: [], name: '', remember: true };

  onFinish = (values: any) => {
    this.props.onOk(values);
    this.props.onClose();
  };

  static getDerivedStateFromProps(props: Readonly<IAddProps>, state: Readonly<IIngredientModel>): IIngredientModel | null {
    const { selected } = props;

    if(!selected) return null;

    if (selected.id && selected.id !== state.id) {

      return {
        id: selected.id,
        name: selected.name,
        qty: selected.qty,
        colors: selected.colors
      };
    }

    return null;
  }

  render() {
    const { isVisible } = this.props;

    return (
      <Modal
        title="Add Ingredient"
        visible={isVisible}
        onOk={() => this.formRef.current.submit()}
        onCancel={() => this.props.onClose()}
        destroyOnClose={true}
      >
        <Form {...layout} ref={this.formRef} initialValues={this.state} onFinish={this.onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Quantity" name="qty" rules={[{ required: true, message: 'Please input the Quantity!' }]}>
            <InputNumber />
          </Form.Item>

          <Form.Item label="Color" name="colors" rules={[{ required: true, message: 'Please input the Color!' }]}>
            <Select style={{ width: 171 }} mode="multiple" defaultValue={this.state.colors}>
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

import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

const { Option } = Select;
export interface IAddProps {
  isVisible: boolean;
}

export class AddIngredient extends React.Component<IAddProps, {}> {
  formRef: any = React.createRef();

  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  render() {

    const { isVisible } = this.props;

    return (
      <Modal
        title="Add Item"
        visible={isVisible}
        onOk={()=>this.formRef.current.submit()}
      >
        <Form ref={this.formRef} onFinish={this.onFinish}>

          <Form.Item
            name="note"
            label="Note"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select placeholder="Select a option and change input text above"allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}


import React from "react";
import { Form, Input} from "antd";

class InventoryForm extends React.Component {
  state = {
    form: this.props.form,
    record: this.props.record
  };

  componentDidMount() {
    if (this.state.record !== null) {
      this.state.form.setFieldsValue({
        name: this.state.record.name,
        sku: this.state.record.sku,
        upc: this.state.record.upc,
        propertyName: this.state.record.propertyName,
        propertyValue: this.state.record.propertyValue
      });
    }
  }

  render() {
    const { form } = this.state;

    return (
      <Form
        form={form}
        labelCol={{
          span: 4
        }}
        layout="vertical"
      >
        <Form.Item
          name="sku"
          label="SKU:"
          rules={[
            {
              required: true,
              message: "This information is required."
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="upc"
          label="UPC:"
          rules={[
            {
              required: true,
              message: "This information is required."
            },
            {
              pattern: /^[0-9]{10,13}$/,
              message: "UPC must be 10, 12, or 13 numeric characters."
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="property_name"
          label="Property Name:"
          rules={[
            {
              required: true,
              message: "Property name is required."
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="property_value"
          label="Property Value:"
          rules={[
            {
              required: true,
              message: "Property value is required."
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    );
  }
}

export default InventoryForm;
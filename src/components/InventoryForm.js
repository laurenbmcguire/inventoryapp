import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

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
        properties: this.state.record.properties
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
          name="name"
          label="Name:"
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

        <Form.List name="properties">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "propertyName"]}
                    fieldKey={[field.fieldKey, "propertyName"]}
                    rules={[
                      {
                        required: true,
                        message: "Property name is required."
                      }
                    ]}
                  >
                    <Input placeholder="Property Name" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "propertyValue"]}
                    fieldKey={[field.fieldKey, "propertyValue"]}
                    rules={[
                      {
                        required: true,
                        message: "Property value is required."
                      }
                    ]}
                  >
                    <Input placeholder="Property Value" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Property
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    );
  }
}

export default InventoryForm;

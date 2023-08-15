import React from "react";
import moment from "moment";
import { default as EditRecord } from "./EditRecord";
import { Table, Button, Input, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const { Search } = Input;

class InventoryList extends React.Component {
  render() {
    let { sortedInfo } = this.props;
    sortedInfo = sortedInfo || {};

    const columns = [
      {
        title: "Item Name",
        dataIndex: "itemName",
        key: "itemName",
        sorter: (a, b) => {
          return a.itemName.localeCompare(b.itemName);
        },
        sortOrder: sortedInfo.columnKey === "itemName" && sortedInfo.order,
      },
      {
        title: "UPC",
        dataIndex: "upc",
        key: "upc",
        sorter: (a, b) => {
          return a.upc.localeCompare(b.upc);
        },
        sortOrder: sortedInfo.columnKey === "upc" && sortedInfo.order,
      },
      {
        title: "Available On",
        dataIndex: "available_on",
        key: "available_on",
        render: (value) => moment(value).format("LLL"),
        sorter: (a, b) => new Date(a.available_on) - new Date(b.available_on),
        sortOrder: sortedInfo.columnKey === "addDate" && sortedInfo.order,
      },
      {
        title: "SKU",
        dataIndex: "sku",
        key: "sku",
        sorter: (a, b) => {
          return a.sku.localeCompare(b.sku);
        },
        sortOrder: sortedInfo.columnKey === "sku" && sortedInfo.order,
      },
      {
        title: "Property Name",
        dataIndex: "property_name",
        key: "property_name",
        sorter: (a, b) => {
          return a.property_name.localeCompare(b.property_name);
        },
        sortOrder: sortedInfo.columnKey === "property_name" && sortedInfo.order,
      },
   {
        title: "Property Value",
        dataIndex: "property_value",
        key: "property_value",
        sorter: (a, b) => {
          return a.property_value.localeCompare(b.property_value);
        },
        sortOrder: sortedInfo.columnKey === "property_value" && sortedInfo.order,
      },
      {
        key: "action",
        render: (record) => (
          <>
            <Button
              ghost
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => this.props.editRecord(record)}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => this.props.deleteRecord(record)}
            />
          </>
        ),
      },
    ];

    return (
      <>
        <div align="right">
          <Space>
            <Search
              style={{ marginBottom: 10, width: 200 }}
              placeholder="Search by..."
              defaultValue={this.props.searchTableValue}
              enterButton
              onSearch={this.props.search}
              allowClear="true"
            />
            <Button style={{ marginBottom: 10 }} onClick={this.props.clear}>
              <CloseCircleOutlined />
              Clear Search
            </Button>
          </Space>
        </div>

        <Table
          size="small"
          dataSource={
            this.props.filterTable == null
              ? this.props.inventory
              : this.props.filterTable
          }
          rowKey="itemId"
          columns={columns}
          loading={this.props.loading}
          onChange={this.props.handleTableChange}
          pagination={{ defaultPageSize: 10, showSizeChanger: true }}
          expandable={{
            expandedRowRender: (record) => <p>{record.notes}</p>,
          }}
        />

        <EditRecord
          visible={this.props.visible}
          updateRecord={this.props.updateRecord}
          onCancel={this.props.onCancel}
          record={this.props.record}
        />
      </>
    );
  }
}

export default InventoryList;





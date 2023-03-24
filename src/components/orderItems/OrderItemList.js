import React from "react";
import { Space, Table } from "antd";
import CrudDelete from "../CrudDelete";

export default function OrderItemList({ orderItems, onDelete }) {
  const columns = [
    {
      title: "Type",
      dataIndex: ["menuItem", "type"],
      key: "type",
    },
    {
      title: "Name",
      dataIndex: ["menuItem", "name"],
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "unitPrice",
      key: "quantity",
      render: (_, item) => item.unitPrice + " RON",
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <CrudDelete
            itemId={item.id}
            onDelete={onDelete}
            resource="order_items"
          ></CrudDelete>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={orderItems} rowKey="id" />
    </div>
  );
}

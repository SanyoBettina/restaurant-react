import React from "react";
import { Space, Table } from "antd";
import CrudDelete from "../CrudDelete";

function FoodList({ onDelete, foods }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <CrudDelete
            itemId={item.id}
            onDelete={onDelete}
            resource="foods"
          ></CrudDelete>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="title">Food List</div>
      <Table columns={columns} dataSource={foods} rowKey="id" />
    </div>
  );
}

export default FoodList;

import React from "react";
import { Space, Table } from "antd";
import CrudDelete from "../CrudDelete";
import FoodEdit from "./FoodEdit";

function FoodList({ onDelete, onEdit, foods }) {
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
      render: (_, item) => item.price + " RON",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      render: (_, item) => item.weight + " g",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <FoodEdit foodItem={item} onEdit={onEdit}></FoodEdit>
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
      <Table columns={columns} dataSource={foods} rowKey="id" />
    </div>
  );
}

export default FoodList;

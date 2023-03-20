import React from "react";
import { Space, Table } from "antd";
import CrudDelete from "../CrudDelete";

function DrinkList({ onDelete, drinks }) {
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
      title: "Drink Type",
      dataIndex: "drinkType",
      key: "drinkType",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <CrudDelete
            itemId={item.id}
            onDelete={onDelete}
            resource="drinks"
          ></CrudDelete>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="title">Drink List</div>
      <Table columns={columns} dataSource={drinks} rowKey="id" />
    </div>
  );
}

export default DrinkList;

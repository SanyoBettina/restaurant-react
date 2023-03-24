import React from "react";
import { Space, Table } from "antd";
import CrudDelete from "../CrudDelete";
import DrinkEdit from "./DrinkEdit";

function DrinkList({ onDelete, drinks, onEdit }) {
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
      title: "Drink Type",
      dataIndex: "drinkType",
      key: "drinkType",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (_, item) => item.size + " ml",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <DrinkEdit drinkItem={item} onEdit={onEdit}></DrinkEdit>
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
      <Table columns={columns} dataSource={drinks} rowKey="id" />
    </div>
  );
}

export default DrinkList;

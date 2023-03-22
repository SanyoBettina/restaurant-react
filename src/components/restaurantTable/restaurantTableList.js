import { Space, Table } from "antd";
import CrudDelete from "../CrudDelete";

const RestaurantTableList = ({ tables, onDelete }) => {
  const columns = [
    {
      title: "Table Number",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Number of Seats",
      dataIndex: "nrOfSeats",
      key: "nrOfSeats",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <CrudDelete
            itemId={item.id}
            resource="tables"
            onDelete={onDelete}
          ></CrudDelete>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={tables} rowKey="id" />
    </div>
  );
};
export default RestaurantTableList;

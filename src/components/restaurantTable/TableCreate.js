import { Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { restaurantConfig } from "../../config";
import TableAddModal from "./TableAddModal";

const TableCreate = ({ onCreate }) => {
  const API_URL = restaurantConfig.apiUrl + "tables";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addTable = async (tableItem) => {
    try {
      const { data } = await axios.post(API_URL, tableItem);
      message.success("Tables has been created successfully.");
      onCreate(data);
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="create-element">
      <Button className="addbtn" type="primary" onClick={showModal}>
        Add
      </Button>
      <TableAddModal
        open={isModalOpen}
        onCancel={handleCancel}
        onCreate={addTable}
        resetFields={true}
        title="Add table"
      ></TableAddModal>
    </div>
  );
};

export default TableCreate;

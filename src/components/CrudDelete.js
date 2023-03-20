import { Button, Modal, message } from "antd";
import axios from "axios";
import { useState } from "react";

const CrudDelete = ({ itemId, onDelete, resource }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/${resource}/${itemId}`);
      onDelete(itemId);

      message.success("Item has been deleted successfully.");
      setIsModalOpen(false);
    } catch (error) {
      message.error(error.message);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" danger onClick={showModal}>
        Delete
      </Button>
      <Modal
        title={`Are you sure to delete this item?`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};
export default CrudDelete;

import { Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { restaurantConfig } from "../../config";
import OrderItemForm from "./OrderItemForm";

export default function OrderItemCreate({ orderId, onCreate }) {
  const API_URL =
    restaurantConfig.apiUrl + "orders/" + orderId + "/order_items";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addOrderItem = async (orderItem) => {
    try {
      const { data } = await axios.post(API_URL, orderItem);
      message.success("Order item has been added successfully.");
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
      <OrderItemForm
        open={isModalOpen}
        onCancel={handleCancel}
        onCreate={addOrderItem}
      ></OrderItemForm>
    </div>
  );
}

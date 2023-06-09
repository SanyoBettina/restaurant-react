import { Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { restaurantConfig } from "../../config";
import FoodForm from "./FoodForm";

const FoodEdit = ({ foodItem, onEdit }) => {
  const foodId = foodItem.id;
  const API_URL = restaurantConfig.apiUrl + "foods/" + foodId;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateFood = async (foodItem) => {
    try {
      await axios.put(API_URL, foodItem);
      foodItem.id = foodId;
      message.success("Food has been changed successfully.");
      onEdit(foodItem);
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <FoodForm
        open={isModalOpen}
        onCancel={handleCancel}
        onCreate={updateFood}
        foodItem={foodItem}
        resetFields={false}
        title="Edit food"
      ></FoodForm>
    </>
  );
};
export default FoodEdit;

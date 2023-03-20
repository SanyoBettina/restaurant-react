import { Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { restaurantConfig } from "../../config";
import FoodForm from "./FoodForm";

const FoodCreate = ({ onCreate }) => {
  const API_URL = restaurantConfig.apiUrl + "foods";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addFood = async (foodItem) => {
    try {
      const { data } = await axios.post(API_URL, foodItem);
      message.success("Food has been created successfully.");
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
      <FoodForm
        open={isModalOpen}
        onCancel={handleCancel}
        onCreate={addFood}
        resetFields={true}
        title="Add food"
      ></FoodForm>
    </div>
  );
};
export default FoodCreate;

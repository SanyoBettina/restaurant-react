import { Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { restaurantConfig } from "../../config";
import DrinkForm from "./DrinkForm";

const DrinkCreate = ({ onCreate }) => {
  const API_URL = restaurantConfig.apiUrl + "drinks";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addDrink = async (drinkItem) => {
    try {
      const { data } = await axios.post(API_URL, drinkItem);
      message.success("Drink has been created successfully.");
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
      <DrinkForm
        open={isModalOpen}
        onCancel={handleCancel}
        onCreate={addDrink}
        resetFields={true}
        title="Add food"
      ></DrinkForm>
    </div>
  );
};
export default DrinkCreate;

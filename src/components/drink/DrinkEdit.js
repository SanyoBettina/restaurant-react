import { Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { restaurantConfig } from "../../config";
import DrinkForm from "./DrinkForm";

const DrinkEdit = ({ drinkItem, onEdit }) => {
  const drinkId = drinkItem.id;
  const API_URL = restaurantConfig.apiUrl + "drinks/" + drinkId;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const updateDrink = async (drinkItem) => {
    try {
      await axios.put(API_URL, drinkItem);
      drinkItem.id = drinkId;
      message.success("Drink has been changed successfully.");
      onEdit(drinkItem);
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <DrinkForm
        open={isModalOpen}
        onCancel={handleCancel}
        onCreate={updateDrink}
        drinkItem={drinkItem}
        resetFields={false}
        title="Edit drink"
      ></DrinkForm>
    </>
  );
};
export default DrinkEdit;

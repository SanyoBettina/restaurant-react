import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCreate from "../components/food/FoodCreate";
import FoodList from "../components/food/FoodList";
import { restaurantConfig } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

export default function FoodPage() {
  const API_URL = restaurantConfig.apiUrl + "foods";
  const [food, setFood] = useState([]);

  const onFoodDelete = (foodId) => {
    const foodList = food.filter((f) => foodId !== f.id);
    setFood(foodList);
  };

  const onFoodEdit = (foodItem) => {
    const index = food.findIndex((f) => f.id === foodItem.id);
    const foods = [...food.slice(0, index), foodItem, ...food.slice(index + 1)];
    setFood(foods);
  };

  const onFoodCreate = (foodItem) => {
    setFood([...food, foodItem]);
  };

  useEffect(() => {
    const getFoods = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setFood(data);
      } catch (error) {
        message.error(error.message);
      }
    };
    getFoods();
  }, [API_URL]);

  return (
    <div>
      <div className="title">
        <FontAwesomeIcon icon={faBowlFood} /> Foods
      </div>
      <FoodCreate onCreate={onFoodCreate}></FoodCreate>
      <FoodList
        onDelete={onFoodDelete}
        onEdit={onFoodEdit}
        foods={food}
      ></FoodList>
    </div>
  );
}

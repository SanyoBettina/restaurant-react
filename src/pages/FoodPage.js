import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodList from "../components/food/FoodList";
import { restaurantConfig } from "../config";

export default function FoodPage() {
  const API_URL = restaurantConfig.apiUrl + "foods";
  const [food, setFood] = useState([]);

  const onFoodDelete = (foodId) => {
    const foodList = food.filter((f) => foodId !== f.id);
    setFood(foodList);
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
      <FoodList onDelete={onFoodDelete} foods={food}></FoodList>
    </div>
  );
}

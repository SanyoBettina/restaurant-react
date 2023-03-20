import { useEffect, useState } from "react";
import DrinkList from "../components/drink/DrinkList";
import axios from "axios";
import { restaurantConfig } from "../config";
import { message } from "antd";

export default function DrinkPage() {
  const API_URL = restaurantConfig.apiUrl + "drinks";
  const [drink, setDrink] = useState([]);

  const onDrinkDelete = (drinkId) => {
    const drinkList = drink.filter((f) => drinkId !== f.id);
    setDrink(drinkList);
  };

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setDrink(data);
      } catch (error) {
        message.error(error.message);
      }
    };
    getDrinks();
  }, [API_URL]);

  return (
    <div>
      <DrinkList onDelete={onDrinkDelete} drinks={drink} />
    </div>
  );
}

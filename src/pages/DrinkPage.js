import { useEffect, useState } from "react";
import DrinkList from "../components/drink/DrinkList";
import axios from "axios";
import { restaurantConfig } from "../config";
import { message } from "antd";
import DrinkCreate from "../components/drink/DrinkCreate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";

export default function DrinkPage() {
  const API_URL = restaurantConfig.apiUrl + "drinks";
  const [drink, setDrink] = useState([]);

  const onDrinkDelete = (drinkId) => {
    const drinkList = drink.filter((f) => drinkId !== f.id);
    setDrink(drinkList);
  };
  const onDrinkCreate = (drinkItem) => {
    setDrink([...drink, drinkItem]);
  };

  const onDrinkEdit = (drinkItem) => {
    const index = drink.findIndex((f) => f.id === drinkItem.id);
    const drinks = [
      ...drink.slice(0, index),
      drinkItem,
      ...drink.slice(index + 1),
    ];
    setDrink(drinks);
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
      <div className="title">
        <FontAwesomeIcon icon={faMugSaucer} /> Drinks
      </div>
      <DrinkCreate onCreate={onDrinkCreate}></DrinkCreate>
      <DrinkList
        onDelete={onDrinkDelete}
        onEdit={onDrinkEdit}
        drinks={drink}
      ></DrinkList>
    </div>
  );
}

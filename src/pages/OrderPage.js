import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faPlus } from "@fortawesome/free-solid-svg-icons";
import { restaurantConfig } from "../config";
import { useState } from "react";
import { Button, message } from "antd";
import axios from "axios";
import OrderTables from "../components/order/OrderTables";
import OrderInfo from "../components/order/OrderInfo";

export default function OrederPage() {
  const API_URL = restaurantConfig.apiUrl + `orders`;
  const [order, setOrder] = useState(null);
  const [table, setTable] = useState(null);

  const getOrders = async (tableId) => {
    try {
      setTable(tableId);
      const { data } = await axios.get(API_URL + "?table_id=" + tableId);
      setOrder(data[0]);
    } catch (error) {
      message.error(error.message);
    }
  };

  const createOrder = async () => {
    try {
      const { data } = await axios.post(API_URL, {
        restaurantTableId: table,
      });
      setOrder(data);
    } catch (error) {
      message.error(error.message);
    }
  };

  const closeOrder = async () => {
    try {
      await axios.patch(API_URL + "/" + order.id + "/paid");
      setOrder(null);
      message.success("Order has been paid and closed.");
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="title">
        <FontAwesomeIcon icon={faClipboard} /> Orders
        <OrderTables handleChange={getOrders}></OrderTables>
        {order ? (
          <OrderInfo order={order} closeOrder={closeOrder}></OrderInfo>
        ) : table ? (
          <Button onClick={createOrder}>
            <FontAwesomeIcon icon={faPlus} />
            Add order
          </Button>
        ) : null}
      </div>
    </div>
  );
}

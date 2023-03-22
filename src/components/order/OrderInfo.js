import { Button } from "antd";
import { useEffect, useState } from "react";
import OrderItemCreate from "../orderItems/OrderItemCreate";
import OrderItemList from "../orderItems/OrderItemList";

export default function OrderInfo({ order, orderItems, closeOrder }) {
  const createdDate = new Date(order.createdAt).toLocaleString();
  const [orderItem, setOrderItem] = useState(orderItems);

  useEffect(() => {
    setOrderItem(orderItems);
  }, [orderItems]);

  const onOrderItemCreate = (item) => {
    setOrderItem([...orderItem, item]);
  };

  const onOrderItemDelete = (orderItemID) => {
    const orderItemList = orderItem.filter((f) => orderItemID !== f.id);
    setOrderItem(orderItemList);
  };

  return (
    <div>
      <ul>
        <li>{order.id}</li>
        <li>{createdDate}</li>
        <li>{!order.paid ? "Active" : null}</li>
      </ul>

      <div>
        <OrderItemCreate
          onCreate={onOrderItemCreate}
          orderId={order.id}
        ></OrderItemCreate>
        <OrderItemList
          orderItems={orderItem}
          onDelete={onOrderItemDelete}
        ></OrderItemList>
        <Button onClick={closeOrder}>Close order</Button>
      </div>
    </div>
  );
}

import { Button } from "antd";
import { useEffect, useState } from "react";
import OrderItemCreate from "../orderItems/OrderItemCreate";
import OrderItemList from "../orderItems/OrderItemList";

export default function OrderInfo({ order, closeOrder }) {
  const createdDate = new Date(order.createdAt).toLocaleString();
  const [orderItem, setOrderItem] = useState(order.orderItems);

  useEffect(() => {
    setOrderItem(order.orderItems);
  }, [order.orderItems]);

  const onOrderItemCreate = (item) => {
    setOrderItem([...orderItem, item]);
  };

  const onOrderItemDelete = (orderItemID) => {
    const orderItemList = orderItem.filter((f) => orderItemID !== f.id);
    setOrderItem(orderItemList);
  };

  const total = orderItem.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.quantity * currentItem.unitPrice,
    0
  );

  return (
    <div>
      <div>
        <div className="orderInfo">
          <span>Order number: {order.id}</span>
          <span>Status: {!order.paid ? "Active" : null}</span>
        </div>
        <div id="date">Created at: {createdDate}</div>
      </div>
      <div>
        <OrderItemCreate
          onCreate={onOrderItemCreate}
          orderId={order.id}
        ></OrderItemCreate>
        <OrderItemList
          orderItems={orderItem}
          onDelete={onOrderItemDelete}
        ></OrderItemList>
        <div className="total">Total: {total} RON</div>
        <Button size="large" className="orderCloseBtn" onClick={closeOrder}>
          Close order
        </Button>
      </div>
    </div>
  );
}

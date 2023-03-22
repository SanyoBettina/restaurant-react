import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import OrderList from "../components/order/OrderList";

export default function OrederPage() {
  return (
    <div>
      <div className="title">
        <FontAwesomeIcon icon={faClipboard} /> Orders
        <OrderList></OrderList>
      </div>
    </div>
  );
}

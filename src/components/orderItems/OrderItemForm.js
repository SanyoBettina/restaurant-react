import { Form, InputNumber, message, Modal, Select } from "antd";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { restaurantConfig } from "../../config";

const setMenuOptions = (menu) => {
  let options = [];
  if (!menu) {
    return options;
  }

  for (let i = 0; i < menu.length; i++) {
    options.push({
      value: menu[i].id,
      label: menu[i].name,
    });
  }
  return options;
};

export default function OrderItemForm({ open, onCancel, onCreate }) {
  const API_URL = restaurantConfig.apiUrl;

  const [form] = Form.useForm();
  const [menu, setMenu] = useState(null);

  const menuOptions = useMemo(() => setMenuOptions(menu), [menu]);

  const getFoods = async () => {
    try {
      const { data } = await axios.get(API_URL + "foods");
      setMenu(data);
    } catch (error) {
      message.error(error.message);
    }
  };

  const getDrinks = async () => {
    try {
      const { data } = await axios.get(API_URL + "drinks");
      setMenu(data);
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  const loadMenuItems = async (type) => {
    switch (type) {
      case "food":
        getFoods();
        break;
      case "drink":
        getDrinks();
        break;
      default:
        console.log("Unsupported type");
    }
  };

  return (
    <Modal
      open={open}
      title="Create order item"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="order-item">
        <Form.Item
          name="type"
          label="Type"
          initialValue="food"
          rules={[
            {
              required: true,
              message: "Please select an option!",
            },
          ]}
        >
          <Select
            placeholder="Select an option"
            style={{ width: 170 }}
            onChange={loadMenuItems}
            options={[
              { value: "food", label: "Food" },
              { value: "drink", label: "Drink" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="menuItemId"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please select a menu item!",
            },
          ]}
        >
          <Select
            placeholder="Select a menu item"
            style={{ width: 170 }}
            options={menuOptions}
          />
        </Form.Item>
        <Form.Item
          label="Quantity:"
          name="quantity"
          initialValue={1}
          rules={[
            {
              required: true,
              message: "Please select a quantity!",
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

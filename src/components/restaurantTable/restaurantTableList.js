import { message, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { restaurantConfig } from "../../config";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const RestaurantTableList = () => {
  const API_URL = restaurantConfig.apiUrl + "tables";
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getTables = async () => {
      try {
        const { data } = await axios.get(API_URL);
        const opts = [];
        for (let i = 0; i < data.length; i++) {
          opts.push({
            value: data[i].id,
            label: "Table nr. " + data[i].id,
          });
        }
        setOptions(opts);
      } catch (error) {
        message.error(error.message);
      }
    };
    getTables();
  }, [API_URL]);

  return (
    <Select
      style={{
        width: "100%",
      }}
      placeholder="Select a table"
      onChange={handleChange}
      options={options}
    />
  );
};
export default RestaurantTableList;

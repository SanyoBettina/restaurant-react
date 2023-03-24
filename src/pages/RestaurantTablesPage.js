import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantTableList from "../components/restaurantTable/RestaurantTableList";
import TableCreate from "../components/restaurantTable/TableCreate";
import { restaurantConfig } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantTablesPage() {
  const API_URL = restaurantConfig.apiUrl + "tables";
  const [table, setTable] = useState([]);

  const onTableDelete = (tableId) => {
    const tableList = table.filter((f) => tableId !== f.id);
    setTable(tableList);
  };

  const onTableCreate = (tableItems) => {
    setTable([...table, ...tableItems]);
  };
  useEffect(() => {
    const getTables = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setTable(data);
      } catch (error) {
        message.error(error.message);
      }
    };
    getTables();
  }, [API_URL]);
  return (
    <div>
      <div className="title">
        <FontAwesomeIcon icon={faTable} /> Tables
      </div>
      <TableCreate onCreate={onTableCreate}></TableCreate>
      <RestaurantTableList
        tables={table}
        onDelete={onTableDelete}
      ></RestaurantTableList>
    </div>
  );
}

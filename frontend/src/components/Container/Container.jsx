import React, { useState, useEffect } from "react";
import FormContainer from "../FormContainer/FormContainer";
import axios from "axios";
import DataTable from "../DataTable/DataTable";

const Container = () => {
  const [data, setData] = useState([]);
  const [reloadFlag, setReloadFlag] = useState(false);

  const updateRelod = () => {
    setReloadFlag((prev) => !prev); // Toggle
  };

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/shorturl");
      console.log("The response is ", response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching table data", error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, [reloadFlag]); // Triggers when toggle changes

  return (
    <div>
      <FormContainer updateRelod={updateRelod} />
      <DataTable updateRelod={updateRelod} data={data} />
    </div>
  );
};

export default Container;

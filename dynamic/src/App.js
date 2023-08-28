import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from "./dynamic-table/DynamicTable";
import axios from "axios";
import { Component } from "react";
import "./App.css";
import React, { useState, useEffect } from "react";
import AddCol from "./add-col";

const App = () => {
  const [datas, setdatas] = useState([]);
  const create = "http://localhost:4000/user/users";
 
  useEffect(() => {
    axios.get("http://localhost:4000/user/users").then(({ data }) => {
      setdatas(data);
      console.log(datas);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  


  
  if(datas.length !== 0 ){
    return (
      <div><AddCol TableData={datas} url={create}/>,
      <DynamicTable TableData={datas}/></div>
      
    );
  }
  else{
    return(
      "no data found"
    );
  }
  
  
}
export default App;
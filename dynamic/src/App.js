import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from "./dynamic-table/DynamicTable";
import axios from "axios";
import { Component } from "react";
import "./App.css";
import React, { useState, useEffect } from "react";
import AddCol from "./add-col";

const App = () => {
  const [datas, setdatas] = useState([]);
  const url = "http://localhost:4000/user/users/";
 
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setdatas(data);
      // console.log(datas);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [datas]);

  


  
  if(datas.length !== 0 ){
    return (
      <div>
        <AddCol TableData={datas} url={url}/>
      <br />
      <DynamicTable TableData={datas} url={url}/>
      </div>
    );
  }
  else{
    return(
      "no data found"
    );
  }
  
  
}
export default App;
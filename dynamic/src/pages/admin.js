import 'bootstrap/dist/css/bootstrap.css';
import DynamicTable from "../dynamic-table/DynamicTable";
import AddCol from "../dynamic-table/add-col"
import React, { useState, useEffect } from "react";
import axios from "axios";


function Admin() {

  const [datas, setdatas] = useState([]);
  const url = "http://localhost:4000/user/users/";
  // const url = "http://localhost:4000/company/companies/";

 
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
        <h1>Admin Page</h1>
        <br/>
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

export default Admin
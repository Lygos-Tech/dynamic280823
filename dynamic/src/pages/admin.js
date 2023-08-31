import 'bootstrap/dist/css/bootstrap.css';
import DynamicTable from "../dynamic-table/DynamicTable";
import AddCol from "../dynamic-table/add-col"
import React, { useState, useEffect } from "react";
import axios from "axios";
import './admin.css';


function Admin() {

    const [datas, setdatas] = useState([]);
    const [datas2, setdatas2] = useState([]);
    const [datas3, setdatas3] = useState([]);


    
    const url = "http://localhost:4000/user/users/";
    const url2 = "http://localhost:4000/company/companies/";
    const url3 = "http://localhost:4000/category/categories/";



    useEffect(() => {
        axios.get(url).then(({ data }) => {
          setdatas(data);
        })
        .catch((error) => {
          console.log(error);
        });
        // getCatData();
        getCompData();
        getCatData();
      }, []);
    
      const getCompData = () => {
        axios.get(url2).then(({ data }) => {
            setdatas2(data);
            // setready(true);
          })
          .catch((error) => {
            console.log(error);
          });
        
    };
    const getCatData = () => {
        axios.get(url3).then(({ data }) => {
            setdatas3(data);
            
          })
          .catch((error) => {
            console.log(error);
          });
        
    };

    if (datas.length !== 0) {
        return (
            <div>
                <h1>Admin Page</h1>

                <div class='column'>
                    <h3>User Table</h3>
                    <div class='row'>
                    <div className='table-container'>
                        <AddCol TableData={datas} url={url} />
                        <br />
                        <DynamicTable TableData={datas} url={url} />
                    </div>
                    </div>
                    <br />
                    <h3>Category Table</h3>
                    <div class='row'>
                    <div className='table-container'>
                        <AddCol TableData={datas3} url={url3} />
                        <br />
                        <DynamicTable TableData={datas3} url={url3} />
                    </div>
                    </div>
                </div>

                <div class='column'>
                <h3>Company Table</h3>
                    <div class='row'>
                    <div className='table-container'>
                        <AddCol TableData={datas2} url={url2} />
                        <br />
                        <DynamicTable TableData={datas2} url={url2} />
                    </div>
                    </div>
                    <br />
                    
                </div>

            </div>

        );
    }
    else {
        return (
            "no data found"
        );
    }
}

export default Admin

{/* <div className='table-container'>
                    <DynamicTable TableData={datas} url={url} />
                    <br />
                    <AddCol TableData={datas} url={url} />
                </div> */}
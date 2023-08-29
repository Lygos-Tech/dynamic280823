// import TableData from "./TableData";
import { Table } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";

function DynamicTable({ TableData ,url}) {
  //dynamic object to store edit variable values
  var [obj, setobj] = useState(TableData);

  const initial = TableData;


  const handleCancel = () => {
    setobj(initial);
    setedit(false);
    console.log("cancel", initial);
 }
 
  //sets edit instance
  var [edit, setedit] = useState(false);

  // get table column names
  const column = Object.keys(TableData[0]);
  column.shift();
  column.pop();

  // get table heading data
  const ThData = () => {

    return column.map((data) => {
      return <th key={data}>{data.toUpperCase()}</th>
    }
    )
  }

  //handle delete function
  const deleteUser = (_id) => {
    console.log(_id)
    axios
    .delete(
  url + _id)
    .then((res) => {
      if (res.status === 200) {
      alert("User successfully deleted");
      window.location.reload();
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
  };

  //handle on change field values
  const handleFormChange = (event,index) => {
    obj[index][event.target.name] = event.target.value;
    setobj({...obj})
    console.log("changed",obj)
 }

  //sends post api to url in order to update
  const updateUser = (_id,data) => {
    console.log("updated",data)
    console.log("updated",_id)
    setedit(false);
    axios
	.put(
		url +
		_id,
		data
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
  };

  // get table row datas
  const tdData = () => {
    return TableData.map((data,index) => {
      return (
        <tr>
          {
            column.map((v) => {
              return <td><input
              name={v}
              placeholder={data[v]}
              value={obj[index][v]}
              onChange={event => handleFormChange( event,index)}
              disabled= {!edit}
            /></td>
            })
          }
          {
            !edit === true?<td>
            <button onClick={() => setedit(true)}>Edit</button>
          </td>:<><td>
                <button  onClick={() => handleCancel()}>Cancel</button>
                
              </td>
              <td>
                  <button onClick={() => updateUser(data._id, obj[index])}>Confirm</button>
                </td></>
          }
          
          <td>
            <button onClick={() => deleteUser(data._id)}>Delete</button>
          </td>
        </tr>
      )
    })
  }

  

  return (
    <div className="table-wrapper" >
      <Table striped bordered responsive >
        <thead>
          <tr >
            {ThData()}
            <th>Acitons</th>
          </tr>
        </thead>
        <tbody>
          {tdData()}
        </tbody>
      </Table>
    </div>

  )
}
export default DynamicTable;
// import TableData from "./TableData";
import { Table } from "react-bootstrap";
import axios from "axios";



function DynamicTable({ TableData }) {


  // get table column
  const column = Object.keys(TableData[0]);

  // get table heading data
  const ThData = () => {

    return column.map((data) => {
      return <th key={data}>{data.toUpperCase()}</th>
    }
    )
  }

  const deleteUser = (_id) => {
    axios
    .delete(
  "http://localhost:4000/user/users/" + _id)
    .then((res) => {
      if (res.status === 200) {
      alert("User successfully deleted");
      window.location.reload();
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
  };

  // get table row datas
  const tdData = () => {
    return TableData.map((data) => {
      return (
        <tr>
          {
            column.map((v) => {
              return <td>{data[v]}</td>
            })
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
            <th>Action</th>
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
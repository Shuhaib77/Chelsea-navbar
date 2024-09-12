import React, { useContext } from "react";
import { contextt } from "../App";

function Tabless() {

    const{ num,setnum,data,setdata}=useContext(contextt)
 
  return (
    <div>
      <table style={{border:"2px solid green" }}>
        <tr>
          <th>name</th>
          <th>university</th>
          <th>rating</th>
        </tr>
        <tr>
          <td>
            {data.map((i) => {
              return (
                <div>
                  <td>{i.name}</td>
                </div>
              );
            })}
          </td>
          <td>
            {data.map((i) => {
              return (
                <div>
                  <td>{i.unsity}</td>
                </div>
              );
            })}
          </td>
          <td>
            {data.map((i) => {
              return (
                <div>
                  <td>{i.rating}</td>
                </div>
              );
            })}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Tabless;

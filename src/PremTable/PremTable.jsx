import React, { useEffect, useState } from "react";
import "../PremTable/PremTable"


const PremTable = () => {
    const [Table, setTable] = useState([])
  
    const fetchData = () => {
      fetch("http://localhost:8080/Table")
      

        .then(response => {return response.json()})
        .then(data => {setTable(data)})

    }
  
    useEffect(() => {
      fetchData()
    }, [])

    Table.sort((a,b) => b.points - a.points)

    if (Table.teamName === ""){
      return NaN
    }
    
  
    return (
      // <ul>
      //   {Table.map((Team) => {
      //     console.log(Team)
      //     return(
          
          
      //     <li key={Team.teamID} > 
      //       <p> Team =  {Team.teamName }   Won = {Team.won} Drawn = {Team.drawn} Lost = {Team.lost} Points = {Team.points} </p>             
      //     </li>
      //   )})}
      // </ul>
      <tbody>
        <tr>
          <th>TeamName    </th>
          <th>Won     </th>
          <th>Drawn     </th>
          <th>Lost     </th>
          <th>Points   </th>

        </tr>
        {Table.map((Team) => (
  <tr key={Team.teamID} >
      <td>{Team.teamName} </td>
      <td>   {Team.won}</td>
      <td>{Team.drawn}</td>
      <td>{Team.lost}</td>
      <td>{Team.points}</td>
  </tr>
  ))}
      </tbody>
    );
  }

  export default PremTable
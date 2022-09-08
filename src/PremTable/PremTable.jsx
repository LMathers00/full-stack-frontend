import React, { useEffect, useState } from "react"



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
    
  
    return (
      <ul>
        {Table.map((Team) => {
          console.log(Team)
          return(
          
          
          <li key={Team.teamID} > 
            <p> Team =  {Team.teamName }   Won = {Team.won} Drawn = {Team.drawn} Lost = {Team.lost} Points = {Team.points} </p>             
          </li>
        )})}
      </ul>
    );
  }
  
  export default PremTable
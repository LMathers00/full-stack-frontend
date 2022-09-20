import React, { useEffect, useState } from "react"



const Fixtures = () => {
    const [match, setmatch] = useState([])
  
    const fetchData = () => {
      fetch("http://localhost:8080/pps")
      // fetch("http://localhost:8080/Table")
      

        .then(response => {return response.json()})
        .then(data => {setmatch(data)})


    }
    useEffect(() => {
      fetchData()
    }, [])
    
  
    return (
      // <ul>
      //   {match.map((game) => {
      //     console.log(game)
          
      //     return(
          
          
      //     <li key={game.match_id} > 
      //       <p>Match No: {game.match_id }:</p>
      //       <p> homeTeamID = {game.homeTeamID} homeTeam Score = {game.homeTeam_Score}</p>
      //       <p> awayTeamID =  {game.awayTeamID} awayTeam Score ={game.awayTeam_Score} </p>             
      //     </li>
      //   )})}
      // </ul>

      <tbody>
        <tr>
          <th>Match ID    </th>
          <th>Home Team     </th>
          <th>Home Score </th>
          <th>Away Team    </th>
          <th>Away Score   </th>

        </tr>
        {match.map((game) => (
  <tr key={game.matchID} >
          <td>{game.match_id}</td>
      <td>{game.homeTeamID} </td>
      <td>   {game.homeTeam_Score}</td>
      <td>{game.awayTeamID}</td>
      <td>{game.awayTeam_Score}</td>

  </tr>
  ))}
      </tbody>
    );
  }
  
  export default Fixtures
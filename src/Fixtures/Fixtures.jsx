import React, { useEffect, useState } from "react"



const Fixtures = () => {
    const [match, setmatch] = useState([])
  
    const fetchData = () => {
      fetch("http://localhost:8080/pps")
      

        .then(response => {return response.json()})
        .then(data => {setmatch(data)})

    }
  
    useEffect(() => {
      fetchData()
    }, [])
    
  
    return (
      <ul>
        {match.map((game) => {
          console.log(game)
          return(
          
          
          <li key={game.match_id} > 
            <p>Match No: {game.match_id }: homeTeamID = {game.homeTeamID} homeTeam Score = {game.homeTeam_Score} awayTeamID =  {game.awayTeamID} awayTeam Score {game.awayTeam_Score} </p>             
          </li>
        )})}
      </ul>
    );
  }
  
  export default Fixtures
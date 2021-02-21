import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const FCover1 = () => {
  const [launches, setRockets] = useState([])
  useEffect(
    () => {
      const fetchRockets = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/launches')
        const data = await response.json()
        setRockets(data)
      }
      fetchRockets()
    },
    [],
  )
  const [searchTern, setSearchTern] = useState('')
  return (
    <div className="text-test">
      <input
      type="text"
      placeholder="search..."
      onChange={event => {setSearchTern(event.target.value)}}/>
      <ul>
        {launches.filter((launche => {
          if (searchTern == ""){
            return launche
          } else if (launche.rocket.rocket_name.toLowerCase().includes(searchTern.toLowerCase())){
            return launche
          }
        })).map((launche, key) =>
          <li key={key}>{launche.rocket.rocket_name}</li>)}
      </ul>
    </div>
  )
}
export default FCover1
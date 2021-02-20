import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

const FCover1 = () => {
  const [rockets, setRockets] = useState([])
  useEffect(
    () => {
      const fetchRockets = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/rockets')
        const data = await response.json()
        setRockets(data)
        console.log(data)
      }
      fetchRockets()
    },
    [],
  )
  return (
   <Container><p className="text-1">Test</p></Container>
  )
}

export default FCover1
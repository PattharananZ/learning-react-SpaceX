import React, { useEffect, useState } from 'react'

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
    <ul>
      {rockets[0].cost_per_launch}
    </ul>
  )
}

export default FCover1
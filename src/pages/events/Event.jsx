import React from 'react'
import { useParams } from 'react-router-dom'

const Event = () => {
    const {id} = useParams()
  return (
    <div>Event id : {id}</div>
  )
}

export default Event
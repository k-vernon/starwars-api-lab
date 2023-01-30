import { getStarshipDetails } from '../../services/sw-api-calls'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
    const starshipData = await getStarshipDetails(location.state.starship.url)
    setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()

  }, [location.state.starship.url])
 
  return ( 
    <>
    <h1 className='title'>STAR WARS STARSHIPS</h1>
      <div className='details-container'>
        <div className='details-card'>
          <h2>NAME: {starshipDetails.name} </h2>
          <h2>MODEL: {starshipDetails.model} </h2>
          <h2><Link style={{ color: 'white' }} to="/"> RETURN </Link></h2>
        </div>
      </div>
    </>
  )
}

export default StarshipDetails;
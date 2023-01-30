import { getAllStarships } from "../../services/sw-api-calls";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const AllStarships = () => {
  const [ starshipList, setAllStarships ] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return(
    <>
      <h1 className="title">STAR WARS STARSHIPS</h1>
      {starshipList.length ?
        <div className="cards-container">
          {starshipList.map(starship =>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/starships' state={{starship}}>
              <div className="ship-card">
                <h2 className="card-title">
                  {starship.name}
                </h2>
              </div>
            </Link>
          )}    
        </div>
        :
        <>
        <h2>Loading...</h2>
        </>
      }
    </>
  )
}

export default AllStarships
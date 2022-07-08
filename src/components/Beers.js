import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import BeerCard from './BeerCard'
import Header from '../components/Header'

const Beers = () => {

    const [loading, setLoading] = useState(true)
    const [beers, setBeers] = useState([])

    useEffect( () => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
           console.log(response.data)
           setLoading(false)
           setBeers(response.data)
        })
        .catch(error => console.log(error))

    }, [])

    return (
      <>
        <Header/>
        <div className='row'>
            {loading && (<p>loading..</p>)}
            {!loading && (
              beers.map(beer => {
                return (
                  <BeerCard
                    key={beer._id}
                    id={beer._id}
                    image={beer.image_url}
                    name={beer.name}
                    description={beer.tagline}
                    createdBy={beer.contributed_by}
                /> )
              })
            )}

        </div>
      </>
    )

}

export default Beers

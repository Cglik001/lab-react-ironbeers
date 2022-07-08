import Header from '../components/Header'
import Beer from '../components/Beer'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const BeerDetail = () => {

  const [beer, setBeer] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then(response => {
      console.log(response.data)
      setBeer(response.data)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
        <Header/>
        {loading && (<p>Loading ...</p>)}
        {!loading &&  <Beer
                      image={beer.image_url}
                      name={beer.name}
                      tagline={beer.tagline}
                      first_brewed={beer.first_brewed}
                      attenuation_level={beer.attenuation_level}
                      description={beer.description}
                      contributed_by={beer.contributed_by}



              /> }

    </div>

  )
}

export default BeerDetail

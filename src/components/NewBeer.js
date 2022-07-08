import Header from '../components/Header'
import {useState} from 'react'
import axios from 'axios'

const NewBeer = () => {

  const [Name, setName] = useState('')
  const [Tagline, setTagline] = useState('')
  const [Description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewersTips, setBrewersTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState('')
  const [contributedBy, setContributedBy] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    const newBeer = {
      'name' : Name,
      'tagline' : Tagline,
      'description' : Description,
      'first_brewed' : firstBrewed,
      'brewers_tips' : brewersTips,
      'attenuation_level' : attenuationLevel,
      'contributed_by' : contributedBy

    }

    const NEW_BEER_URL = 'https://ih-beers-api2.herokuapp.com/beers/new'
    axios.post(NEW_BEER_URL, newBeer)
      .then(response => {
        setName('')
        setTagline('')
        setDescription('')
        setFirstBrewed('')
        setBrewersTips('')
        setAttenuationLevel(0)
        setContributedBy('')
      })

      .catch(error => console.log(error))

  }

  return (
    <div>
    <Header/>
    <div className='card formnew' style={{width: '60%', margin: '0 auto', marginTop: '40px'}}>
      <h1 className='card-title' style={{marginTop: '20px'}}> NEW BEER</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label' htmlFor='name' >Name</label>
          <input
            className="form-control rounded-pill"
            type='text'
            id='name'
            value={Name}
             onChange={ (event) => {setName(event.target.value)}}/>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='tagline'>Tagline</label>
          <input
            className="form-control rounded-pill"
            type='text'
            id='tagline'
            value={Tagline}
            onChange={ (event) => {setTagline(event.target.value)}}/>
        </div>
         <div className='form-group'>
          <label className='form-label' htmlFor='description'>Description</label>
          <textarea
            className="form-control" style={{height: '120px'}}
            type='text'
            id='description'
            value={Description}
            onChange={ (event) => {setDescription(event.target.value)}}/>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='first_brewed'>First Brewed</label>
          <input
            className="form-control rounded-pill"
            type='text'
            id='first_brewed'
            value={firstBrewed}
            onChange={ (event) => {setFirstBrewed(event.target.value)}}/>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='brewers_tips'>Brewer's Tips</label>
          <input
            className="form-control rounded-pill"
            type='text'
            id='brewers_tips'
            value={brewersTips}
            onChange={ (event) => {setBrewersTips(event.target.value)}}/>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='attenuation_level'>Attenuation Level</label>
          <input
            className="form-control rounded-pill"
            type='number'
            id='attenuation_level'
            value={attenuationLevel}
            onChange={ (event) => {setAttenuationLevel(event.target.value)}}/>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='contributed_by'>Contributed By</label>
          <input
            className="form-control rounded-pill"
            type='text'
            id='contributed_by'
            value={contributedBy}
            onChange={ (event) => {setContributedBy(event.target.value)}}/>
        </div>


        <button type='submit' className='btn btn-dark rounded-pill' style={{marginBottom: '20px', paddingRight: '80px', paddingLeft: '80px', paddingTop: '10px',  paddingBottom: '10px' }}>ADD NEW</button>
      </form>
      </div>
    </div>

  )
}

export default NewBeer

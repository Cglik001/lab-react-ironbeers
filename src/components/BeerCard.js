import {Link} from 'react-router-dom'

const BeerCard = (props) => {

  const {id,image, name, description, createdBy} = props

  return (
    <div className='list-group-item'>
        <div className='container row card' style={{flexDirection: 'row', width: '70%', height: '80%', margin: '20px auto', border: 'none'}}>
          <div className='col'>
            <img className='card-image-top'src={image} alt='beer' style={{width: '20%', paddingTop: '32px', paddingBottom: '26px',}}/>
          </div>
          <div className='col-8 card-body'>
            <h3 className='card-title'><Link to={`/beers/${id}`}>{name}</Link></h3>

            <h3  className='card-text'>{description}</h3>
            <h3  className='card-text'>{createdBy}</h3>
          </div>

        </div>

    </div>
  )
}

export default BeerCard

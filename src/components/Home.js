import RandomBeer from '../assets/random-beer.png'
import NewBeer from '../assets/new-beer.png'
import Beers from '../assets/beers.png'
import {Link} from 'react-router-dom'


const Home = () => {

  return (
    <div class="container">
      <div class='row'>
        <div className="row-sm-4 card" style={{width: '70%', margin: '0 auto', marginTop: '20px', marginBottom: '20px'}}>
          <div className='card-body'>
            <img className='card-img-top' src={Beers} alt='all-beers'/>
            <h3 className="card-title" style={{paddingTop: '12px', paddingBottom: '12px'}}><Link to={'/beers'}> All Beers</Link></h3>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque finibus lectus a blandit. Nunc non sagittis nibh. Curabitur cursus risus quis augue iaculis ultricies. Maecenas vel arcu dolor. Maecenas non pulvinar eros, ac finibus tellus. Vivamus felis neque, volutpat et ornare vitae, bibendum sed purus. </p>
        </div>
        </div>
        <div className="row-sm-4 card" style={{width: '70%', margin: '0 auto',  marginTop: '20px', marginBottom: '20px'}}>
          <div className='card-body'>
          <img className='card-img-top' src={NewBeer} alt='random-beer'/>
          <h3 className="card-title" style={{paddingTop: '12px', paddingBottom: '12px'}}><Link to={'/random-beer'}> Random Beer</Link></h3>
          <p className="card-text">Mauris ut leo venenatis, ultrices libero tincidunt, porta enim. Nullam facilisis congue odio a venenatis. Curabitur dolor enim, elementum suscipit ullamcorper vel, ultricies ut tortor.</p>
        </div>
        </div>
        <div className="row-sm-4 card" style={{width: '70%', margin: '0 auto', marginBottom : '20px'}}>
          <div className='card-body'>
            <img className='card-img-top' src={RandomBeer} alt='new-beer'/>
            <h3 className="card-title" style={{paddingTop: '12px', paddingBottom: '12px'}}><Link to={'/new-beer'}> New Beer</Link></h3>
            <p className="card-text">Quisque maximus, est et consectetur venenatis, ante neque venenatis nunc, hendrerit pulvinar velit justo nec enim. Nam viverra lacus ut lacus dapibus consectetur.</p>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Home

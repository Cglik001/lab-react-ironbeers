import './App.css';
import {Route, Routes} from 'react-router-dom'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import Beers from './components/Beers'
import Home from './components/Home'
import BeerDetail from './components/BeerDetail'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/beers' element={<Beers/>} />
        <Route path="/beers/:id" element={<BeerDetail/>} />
        <Route path='/random-beer' element={<RandomBeer/>} />
        <Route path='/new-beer' element={<NewBeer/>} />
      </Routes>

    </div>
  );
}

export default App;

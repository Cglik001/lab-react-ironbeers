import HomeIcon from '../assets/home-icon.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <Link className="navbar-brand" to={'/'}>
        <img src={HomeIcon}  className="d-inline-block align-top header" style={{ width:"30", height:"30" }} alt="home"/>
      </Link>
    </nav>
  )

}

export default Header

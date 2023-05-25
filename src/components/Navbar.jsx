import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Navbar() {
    

    return (
      <>
      <div className="Navbar-container">
        <img src={logo} alt="bookmark logo" />

        <ul className="Navbar-list">
           
            <li className="nav-list">
              
              <Link to="/features">FEATURES</Link> 
            </li>
            <li className="nav-list">
                
            <Link to="/download">DOWNLOAD</Link> 
            </li>
            <li className="nav-list"> 
            <Link to="/contact">CONTACT</Link> 
            </li>

            <li className="nav-list"> 
            <Link to="/bookmark">BOOKMARK</Link> 
            </li>
            
            <li className="nav-list">
               <button className="login-button"><Link to="/login">LOGIN</Link></button> 
            </li>
        </ul>
        </div>
      </>
    )
  }
  
  export default Navbar
  
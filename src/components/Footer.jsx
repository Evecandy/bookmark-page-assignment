import "./Footer.css"
import logo from '../assets/logo.svg'
import icontwitter from '../assets/icon-twitter.svg'
import iconfacebook from '../assets/icon-facebook.svg'
function Footer() {
   
    

    return (
      <>
      <div className="Footer-container">
        <img id="logo-footer" src={logo} alt="bookmark logo"/>

        <ul className="Footer-list">
           
            <li className="Footer-details">
               FEATURES 
            </li>
            <li className="Footer-details">
                PRICING
            </li>
            <li className="Footer-details">
                CONTACT
            </li>
            <i className="icon-facebook"><img src={iconfacebook} alt="facebook icon" /></i>

           <i className="icon-twitter"><img src={icontwitter} alt="twitter icon" /></i>

        </ul>

        </div>
      </>
    )
  }
  
  export default Footer
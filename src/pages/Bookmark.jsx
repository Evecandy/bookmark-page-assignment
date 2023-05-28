
import './Bookmark.css'
// import logo from '../assets/logo-bookmark.svg'
import illustrationHero from "../assets/illustration-hero.svg"

function Bookmark() {
  return (
    <>
      {/* <img src={logo} alt="" /> */}
      <div className='main'>

        <div className='content' >
          <h3> A Simple Bookmark <br />Manager<br /></h3>
          <p style={{ fontSize: '18px' }}>A clean and simple interface to organize your favourite<br /> websites. Open a new
            browser tab and see your sites load <br />instantly. Try it for free.</p>
          <div className="buttons">
            <button style={{ padding: '7px', marginRight: '10px', backgroundColor: 'hsl(231, 69%, 60%)', border: 'none' }}>Get it on Chrome</button>
            <button style={{ padding: '7px' }}>Get it on Firefox</button>
          </div>
        </div>
        <div className="image">
        <img src={illustrationHero} alt="illustration hero" />
        </div>
      </div>
    </>
  )
}
export default Bookmark
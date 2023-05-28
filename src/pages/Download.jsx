
import "./download.css";
import logoChrome from '../assets/logo-chrome.svg'
import logoFirefox from "../assets/logo-firefox.svg"
import logoOpera from "../assets/logo-opera.svg"

function Download() {
  return (
    <div className="download">
      <div className="head-content">
      <h2>Download the extension</h2>
      <p style={{fontSize:"18px",fontFamily:"sans-serif"}}>
        We've got browsers in the pipeline.
         Please do let us know if<br/> you've got a favourite you'd like us to
        prioritize.
      </p>
      </div>
      <div className="browsers">
      <div className="chrome">
        
        <img src={logoChrome} alt="chrome logo" />
        <h3>Add to chrome</h3>
        <p>minimum version 62</p>
        <hr style={{border:"1px dashed black", width:"100%"}}/>
        <button style={{backgroundColor:"blue",color:"white",borderRadius:"5px",padding:"10px", cursor:"pointer"}}>Add & Install Extension</button>
      </div>
      <div className="firefox">
        <img src={logoFirefox} alt="firefox logo"/>
        <h3>Add to firefox</h3>
        <p>minimum version 55</p>
        <hr style={{border:"1px dashed black", width:"100%"}}/>
        <button style={{backgroundColor:"blue",color:"white",borderRadius:"5px",padding:"10px"}}>Add & Install Extension</button>
      </div>
      <div className="opera">
        
        <img src={logoOpera} alt="opera logo" />
        <h3>Add to opera</h3>
        <p>minimum version 46</p>
        <hr style={{border:"1px dashed black", width:"100%"}}/>
        <button style={{backgroundColor:"blue",color:"white",borderRadius:"5px",padding:"10px"}}>Add & Install Extension</button>
      </div>
    </div>
    </div>
  );
}

export default Download;

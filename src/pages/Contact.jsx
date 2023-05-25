
import { useState } from 'react'

import { } from "react-icons/"

import './contact.css'





function Contact() {

    const [showText, setShowText] = useState(false);





    return (

        <div>

            <div className='body-1'>

                <div className='main'>

                    <h2>Frequently Asked Questions</h2>

                    <pre>

                        Here are some of our FAQs.If you have any other Questions<br />

                        you'd,like answered please feel free to email us.

                    </pre>

                </div>



                <div className='main-content'>

                    <hr />

                    <form >

                        <label>What is Bookmark ?

                            <button onClick={(e) => {e.preventDefault(); setShowText(!showText)}}><img src="./src/pages/icon-arrow.svg" />  </button>

                            {showText && (

                                <p>

                                    A bookmark is a digital or physical marker used to save<br />

                                    the location of a specific page or website for<br />

                                    later reference

                                </p>

                            )}

                        </label><br />

                        <hr />

                        <label>How can I request a new browser ?

                            <button onClick={() => setShowText(!showText)}><img src="./src/pages/icon-arrow.svg" /></button>

                            {showText && (

                                <p>

                                    Explore different browsers that are available for your operating system.<br />

                                    Some popular options include Google Chrome, Mozilla Firefox, Microsoft Edge.

                                </p>

                            )}

                        </label><br />

                        <hr />

                        <label>Is that a mobile app ?

                            <button onClick={() => setShowText(!showText)}><img src="./src/pages/icon-arrow.svg" /></button>

                            {showText && (

                                <p>

                                    If you are looking for a new browser app for your<br /> mobile device, the process may differ slightly. Here's <br />a general guide for requesting and downloading a<br /> new browser app on your mobile device:

                                </p>

                            )}

                        </label><br />

                        <hr />

                        <label>What about other chromium browsers ?

                            <button onClick={() => setShowText(!showText)}><img src="./src/pages/icon-arrow.svg" /></button>

                            {showText && (

                                <p>

                                    Explore different browsers that are available for your<br /> operating system.

                                    Some popular options include<br />

                                    Google Chrome, Mozilla Firefox, Microsoft Edge.

                                </p>

                            )}

                        </label><br />

                        <hr />

                    </form>

                    <div><button style={{ padding: "3px", borderRadius: "6px", backgroundColor: "blue" }}>More info</button></div>

                </div>

            </div>

            <div className='body-2'>

                <div className='content1'>

                    <h4>35,000 + ALREADY JOINED </h4>

                    <h2>STAY UP-TO-DATE WITH WHAT<br />

                        WE'RE DOING</h2>

                    <form>

                        <input type=''></input> <nbsp />

                        <button style={{ backgroundColor: "red", padding: "4px", borderRadius: "6px" }}>Contact us</button>

                    </form>

                </div>




            </div>

        </div>



    )

}




export default Contact






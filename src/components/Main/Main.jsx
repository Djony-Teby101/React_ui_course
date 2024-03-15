import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
    return (
        <div className='main'>
            <div className="nav">
                <p>Nice Team</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Ohayo, Dev.</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautifull places to see on an ipcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: Urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorming team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a Prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Nice Team&copy;{new Date().getFullYear()} Credentials policy.
                </p>
            </div>

        </div>
    )
}

export default Main
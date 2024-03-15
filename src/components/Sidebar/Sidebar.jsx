import React, {useState} from 'react'
import './Sidebar.css'
import{assets} from '../../assets/assets'


function Sidebar() {
    
    const [extended, setExtended]=useState(false)
    const handleClick=()=>{
        setExtended(prev=> !prev)
    }
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={handleClick} className='menu'  src={assets.menu_icon} alt="" />
            <div className="new-Chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>

            {extended ? <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What's React...</p>
                </div>
            </div>: null}
            
        </div>
        <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended &&  <p>Activity</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended &&  <p>Setting</p>}
                   
                </div>
        </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';
import "./footer.css";

function Footer() {
  return (
    // <div className="topbarContainer">



    <div className="footer">
        <div className="downbarIconIteam">
          <PersonIcon className='ic'/>
          <span className="downbarIconBadge">1</span>
        </div>
        <div className="downbarIconIteam">
          <ChatIcon className='ic'/>
          <span className="downbarIconBadge">75</span>
        </div>
        <div className="downbarIconIteam">
          <NotificationIcon className='ic'/>
          <span className="downbarIconBadge">100</span>
        </div>
      </div>


    // </div>


  )
}

export default Footer;
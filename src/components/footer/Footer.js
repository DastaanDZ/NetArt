import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
// import {faFacebook} from '@fortawesome/free-brands-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { BsFacebook,BsGlobe2 } from "react-icons/bs";
// library.add(faCircle, faFacebook, faGlobe)

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="phone"> 
        <FontAwesomeIcon icon={faPhone} className='icon'/>
        <p className='footer_detail'>Toll free 1800 200 1234</p>
        </div>
        <div className="phone"> 
        <BsFacebook className='icon'/>
        <p className='footer_detail'>www.facebook.com/cripumps</p>
        </div>
        <div className="phone"> 
        <BsGlobe2 className='icon'/>
        <p className='footer_detail'>www.crigroups.com</p>
        </div>
        </div>

    </>
  )
}

export default Footer

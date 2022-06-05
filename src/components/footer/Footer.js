import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
// import {faFacebook} from '@fortawesome/free-brands-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'

// library.add(faCircle, faFacebook, faGlobe)

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="phone"> 
        <FontAwesomeIcon icon={faCircle} className='icon' />
        <p className='footer_detail'>Toll free 1800 200 1234</p>
        </div>
        <div className="phone"> 
        <FontAwesomeIcon icon={faCircle} className='icon'/>
        <p className='footer_detail'>Toll free 1800 200 1234</p>
        </div>
        <div className="phone"> 
        <FontAwesomeIcon icon={faCircle} className='icon'/>
        <p className='footer_detail'>Toll free 1800 200 1234</p>
        </div>
        </div>

    </>
  )
}

export default Footer

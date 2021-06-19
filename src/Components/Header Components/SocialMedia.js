import React from 'react'
import './SocialMedia.css'
import {FaFacebookF, FaInstagram, FaAmazon} from 'react-icons/fa'

function SocialMedia() {
    return (
        <div className = {'social-media__wrapper flex'}>
            <div><FaFacebookF/></div>
            <div> <FaInstagram/></div>
            <div><FaAmazon/></div>
           
        </div>
    )
}

export default SocialMedia

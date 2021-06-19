import React from 'react'
import Nav from './Nav'
import './Header.css'
import MainNav from './MainNav'
import HeaderMainSection from './HeaderMainSection'


import Basket from './Basket'
import SocialMedia from './SocialMedia'

function Header() {
    return (
        <div className = {'header'}>
            <HeaderMainSection/>
            <div className = {'nav-wrapper'}>
                <MainNav/>
                <div className = {'flex space-btw'}>
                    <Nav/>
                    <SocialMedia/>
                    <Basket/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header

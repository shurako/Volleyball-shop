import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'Black',
        textDecoration : 'none'
    }

    return (
        <div className= {'nav filter'}>
            
                <Link style = {navStyle} to = {'/shoes'}><div className = {'nav item'}>Obuwie</div></Link>
                <div className = {'nav item'}>Odzież</div>
                <div className = {'nav item'}>Dla niej</div>
                <div className = {'nav item'}>Dla niego</div>
                <div className = {'nav item'}>Akcesoria</div>
                <div className = {'nav item'}>Strefa kibica</div>
                <div className = {'nav item'}>Dla drużyn</div>
            
        </div>
    )
}



export default Nav

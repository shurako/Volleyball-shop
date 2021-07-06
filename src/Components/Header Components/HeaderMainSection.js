import React from 'react'
import {Link} from 'react-router-dom'

function HeaderMainSection() {


    return (
        <div  className = {'logo'}>
            <Link to={"/"}  ><img  alt="" src="logo.png" /></Link>
        </div>
    )
}

export default HeaderMainSection

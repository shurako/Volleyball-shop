import React from 'react'

function HeaderMainSection() {


    const mouseEnter = () => {
        console.log('mouse enter')
        
    }

    return (
        <div  className = {'logo'}>
            <img  alt="" src="logo.png" />
        </div>
    )
}

export default HeaderMainSection

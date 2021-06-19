import React from 'react'

function AdvantagesBarItem(props) {
    return (
        <div className = {'advantages-bar-item flex'}>
            <div className = {'icon'}>{<props.icon/>}</div>
            <div>
                <div className ={'item-title'}>{props.title}</div>
                <div className = {'item-description'}>{props.description}</div>
            </div>
        </div>
    )
}

export default AdvantagesBarItem

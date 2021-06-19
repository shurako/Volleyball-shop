import React, {useState} from 'react'
import AdvantagesBarItem from './AdvantagesBarItem'
import {FaThumbsUp} from 'react-icons/fa'
import {Ri24HoursLine} from 'react-icons/ri'
import {HiTruck} from 'react-icons/hi'
import{GiReturnArrow} from 'react-icons/gi'

import './AdvantagesBar.css'

function AdvantagesBar() {

    const advantagesData = [
        {
            icon: FaThumbsUp,
            title: '99.9% POZYTYWNYCH OPINII',
            description: '16600 użytkowników serwisu Allegro oceniło nasz sklep na 5 gwiazdek'
        },
        {
            icon: Ri24HoursLine,
            title: 'WYSYŁKA W 24H',
            description: 'dostępność produktu od ręki'
        },
        {
            icon: HiTruck,
            title: 'DARMOWA DOSTAWA',
            description: 'od 250 ZŁ'
        },
        {
            icon: GiReturnArrow,
            title: 'DARMOWY ZWROT',
            description: 'w ciaągu 60 dni'
        }
    ]

    


    return (
        <div className = {'advantages-bar'}>
            {advantagesData.map(item => {
                return(<AdvantagesBarItem icon ={item.icon} title = {item.title} description = {item.description}/>)
            })}
        </div>
    )
}

export default AdvantagesBar

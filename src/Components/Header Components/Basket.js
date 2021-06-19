import React from 'react'
import './Basket.css'
import { FaShoppingBasket } from 'react-icons/fa'


function Basket() {
    return (
        <div className = {'basket'}>
            <FaShoppingBasket/>
            <div className = {'total'}> 0 zł</div>

        </div>
    )
}

export default Basket

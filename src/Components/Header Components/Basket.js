import React, {useState} from 'react'
import './Basket.css'
import { FaShoppingBasket } from 'react-icons/fa'


function Basket(props) {
    const [total, setTotal] = useState(0)


    return (
        <div className = {'basket'}>
            <FaShoppingBasket/>
            <div className = {'total'}>{total} zł</div>

        </div>
    )
}

export default Basket

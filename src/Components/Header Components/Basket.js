import React, {useState} from 'react'
import './Basket.css'
import { FaShoppingBasket } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { increment } from '../../actions'
import MainBasket from '../AdvantagesBarComponents/BasketComponents/MainBasket'


function Basket(props) {
    const [total, setTotal] = useState(0)
    const counter = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
    console.log(counter)
    return (
        <div onClick = {() => dispatch(increment())} className = {'basket'}>
            <FaShoppingBasket/>
            <div className = {'total'}>{counter} zł</div>
            <MainBasket/>

        </div>
    )
}

export default Basket

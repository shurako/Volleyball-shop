import React, {useState} from 'react'
import './Basket.css'
import { FaShoppingBasket } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { increment } from '../../actions'
import {show, hide} from '../../actions'
import {useSpring, animated} from 'react-spring'

import MainBasket from '../AdvantagesBarComponents/BasketComponents/MainBasket'



function Basket(props) {

  

    const [total, setTotal] = useState(0)
    const counter = useSelector(state => state.counterReducer)
    const test = useSelector((state) => state.isBasketShown)
    const dispatch = useDispatch()
    

    const countAnimation = useSpring({
        val : counter,
        
    })

    const {rotateZ} = useSpring({
        from: {rotateZ : 0 },
        to: { rotateZ : 1},
        config : {duration : 500},
        
        
       reset : true
    })

    

    return (
        <animated.div  onMouseLeave = {() => {dispatch(hide());console.log(test)} } onMouseOver = {() => {dispatch(show()); console.log(test)} } className = {'basket'}>
            <animated.div style = { {transform: rotateZ.interpolate([0, 0.2, 0.4, 0.6, 0.8, 1], [0, 10, -10, 10, -10, 0]).interpolate(z => `rotateZ(${z}deg)`)}} ><FaShoppingBasket/></animated.div>
            <div className = {'total'}>
                <animated.div >
                    {countAnimation.val.interpolate(val => Math.floor(val))}    
                </animated.div> zł</div>
            <MainBasket/>

        </animated.div>
    )
}

export default Basket

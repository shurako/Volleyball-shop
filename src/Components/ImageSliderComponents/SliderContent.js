import React from 'react'
import {useSpring, animated} from 'react-spring'
import { css, jsx } from '@emotion/react'

function SliderContent() {
    const slideAnimation = useSpring({
        transform: 'translateX(100%)', from: {transform: 'translateX(0%)'}
    })
    return (
        <animated.div className = {'slider-content'} style = {slideAnimation}>
            
        </animated.div>
    )
}

export default SliderContent

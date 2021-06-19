import React, {useEffect, useState} from 'react'
import './ImageSlider.css'
import {useSpring, animated} from 'react-spring'
import { css, jsx } from '@emotion/react'
import SliderContent from './SliderContent'

function Slider() {
    return (
        <div className = {'slider'}>
            <SliderContent/>
        </div>
    )

   
    }
    const SliderCSS = css`
    position: relative;
    height: 50vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    background-color: orange;
    border: 1px solid black;
  `

export default Slider

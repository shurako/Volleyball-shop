import React from 'react'
import ProductCard from '../ProductComponents/ProductCard.js'
import {ProductData} from '../ProductData'
import './PromotedProducts.css'

function PromotedProducts() {
    console.log(ProductData)
    return (
        <div className = {'main-section'}>
            <div className ={'section-title'}>POLECAMY</div>
            {ProductData.map(items => {return(<div className = {'promoted-products__wrapper'}>{items.shoes.map(item => {return(<ProductCard size = {item.size} photo = {item.photo} price = {item.price} title = {item.title}/>)})} </div>)})}
            {ProductData.map(items => {return(<div className = {'promoted-products__wrapper'}>{items.shirts.map(item => {return(<ProductCard size = {item.size} photo = {item.photo} price = {item.price} title = {item.title}/>)})} </div>)})}

         
        </div>
    )
}

export default PromotedProducts

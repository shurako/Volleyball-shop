import React from 'react'
import Product from '../ProductComponents/Product';
import {useSelector, useDispatch} from 'react-redux';
import './ClothesPage.css'
import Filter from './FilterComponents/Filter';

function ClothesPage(props) {

    const filterKey = useSelector((state) => state.FilterKey )
    const products = useSelector((state) => state.ProductDB)
<<<<<<< HEAD
    
    const filter =  products.filter(product =>  filterKey.every(filter => { if(!Array.isArray(product[filter.key])){return filter.value.includes(product[filter.key]) }else {return filter.value.some( value => product[filter.key].includes(value) ) } }   ))
=======
    const dispatch = useDispatch()
    
    

    const filter =  products.filter(product =>  filterKey.every(filter => filter.value.includes(product[filter.key])))
    
>>>>>>> parent of 19dc26c (Filter bug fix)
    const render = filter.map((product, i) => {return (<div className = {'product__wrapper'}> <Product product = {product}/></div>) })

    
 

   
   

      
      
      
 

    return (
        <div className = {'products-section'}>
           <Filter/>
            <div className = {'promoted-products__wrapper'}>{render}</div>

          
           
     
        </div>
    )
}

export default ClothesPage

import React from 'react'
import Product from '../ProductComponents/Product';
import {useSelector, useDispatch} from 'react-redux';
import './ClothesPage.css'
import { filterByCategory, filterByBrand,setProducts, addFilter, removeFilter } from '../../actions';
import Filter from './FilterComponents/Filter';

function ClothesPage() {

    const filterKey = useSelector((state) => state.FilterKey )
    const products = useSelector((state) => state.ProductDB)
    const dispatch = useDispatch()
    
    

    const filter =  products.filter(product =>  filterKey.every(filter => filter.value.includes(product[filter.key])))
    
    const render = filter.map((product, i) => {return (<div className = {'product__wrapper'}> <Product product = {product}/></div>) })

    
 

   
   

      
      
      
 

    return (
        <div className = {'products-section'}>
           <Filter/>
           <div className = {'promoted-products__wrapper'}>{render}</div>

          
           
     
        </div>
    )
}

export default ClothesPage

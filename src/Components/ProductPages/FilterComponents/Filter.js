import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../ClothesPage.css'
import { addFilter, removeFilter } from "../../../actions";
import FilterProp from "./FilterProp";
import {BsFilter} from 'react-icons/bs'
import {animated, useSpring, useTransition} from 'react-spring'

function Filter() {
  const dispatch = useDispatch();
  const [brandTable, setBrandTable] = useState({
    params: {
      title: "Marka",
      icon: "",
      showFilterOptions: true,
      style: {},
      key: "brand",
    },
    values: [
      {
        value: "Mizuno",
        isCkecked: false,
      },
      {
        value: "Asics",
        isCkecked: false,
      },
      {
        value: "Adidas",
        isCkecked: false,
      },
      {
        value: "Nike",
        isCkecked: false,
      },
    ],
  });

<<<<<<< HEAD
  const [shirtsSizeTable, setShirtsSizeTable] = useState({
    params: {
      title: "Rozmiar",
      icon: "",
      showFilterOptions: true,
      style: {},
      key: "size",
    },
    values: [
      {
        value: "S",
        isCkecked: false,
      },
      {
        value: "M",
        isCkecked: false,
      },
      {
        value: "L",
        isCkecked: false,
      },
      {
        value: "XL",
        isCkecked: false,
      },
      {
        value: "XXL",
        isCkecked: false,
      },
    ],
  });

=======
  
>>>>>>> parent of 19dc26c (Filter bug fix)
  const [colorTable, setColorTable] = useState({
    params: {
      title: "Kolor",
      icon: "",
      showFilterOptions: false,
      style: {
        display: "flex",
        width: "30%",
        justifyContent: "center",
      },
    },

    values: [
      {
        value: "red",
        isCkecked: false,
      },
      {
        value: "white",
        isCkecked: false,
      },
      {
        value: "black",
        isCkecked: false,
      },
      {
        value: "green",
        isCkecked: false,
      },
      {
        value: "yellow",
        isCkecked: false,
      },
      {
        value: "pink",
        isCkecked: false,
      },
    ],
  });

<<<<<<< HEAD
  const isMobile = useSelector(state => state.setShowMobile)
  const [slideFilters, setSlideFilters] = useState(false)
  
  const transitions = useTransition(slideFilters, {
    from : {opacity : 0, y : '0%', overflow : 'hidden', width : '100%', flexDirection : 'column',  display : 'flex',alignItems : 'center'},
    enter : {opacity : 1, y : '0%', overflow : 'hidden',  },
    leave : {opacity : 0, y : '-100%', overflow : 'hidden',},
    config : {duration : 150}
  })

  const handleCategory = () => {
    
    const item = filterKey.filter(item => item.key == 'category');
    if(item[0].value == 'shoes'){return shoesSizeTable}
    else return shirtsSizeTable
  }
  return (
    <div className={"filter-section__wrapper"}>
      <div className = {'filter-section'}>
      <div onClick = {() => setSlideFilters(!slideFilters)} className = {'title__wrapper'}><BsFilter/><h3>Filtry</h3></div>
        {transitions( (styles, item) => item ? 
        <animated.div style = {styles}>
          <FilterProp filterProp = {handleCategory()} />
          <FilterProp filterProp = {brandTable} />
          <FilterProp filterProp = {colorTable} />
        </animated.div> : '') }
        
=======
  return (
    <div className={"filter-section__wrapper"}>
      <div className = {'filter-section'}>
        <FilterProp filterProp = {brandTable} />
        <FilterProp filterProp = {colorTable} />
>>>>>>> parent of 19dc26c (Filter bug fix)
      </div>
        
    </div>
    
  );
}

export default Filter;

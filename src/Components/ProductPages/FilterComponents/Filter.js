import React, { useState } from "react";
import { BsFilter } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { animated, useTransition } from 'react-spring';
import '../ClothesPage.css';
import FilterProp from "./FilterProp";

function Filter() {

  const filterKey = useSelector(state => state.FilterKey)

  const [shoesSizeTable] = useState({
    params: {
      title: "Rozmiar",
      icon: "",
      showFilterOptions: true,
      style: {},
      key : 'size'
    },
    values: [
      {
        value: "37",
        isCkecked: false,
      },
      {
        value: "38",
        isCkecked: false,
      },
      {
        value: "39",
        isCkecked: false,
      },
      {
        value: "40",
        isCkecked: false,
      },
      {
        value: "41",
        isCkecked: false,
      },
      {
        value: "42",
        isCkecked: false,
      },
      {
        value: "43",
        isCkecked: false,
      },
      {
        value: "44",
        isCkecked: false,
      },
      {
        value: "45",
        isCkecked: false,
      },
      {
        value: "46",
        isCkecked: false,
      },
      {
        value: "47",
        isCkecked: false,
      },
      {
        value: "48",
        isCkecked: false,
      },
      {
        value: "49",
        isCkecked: false,
      },
      {
        value: "50",
        isCkecked: false,
      },
    ],
  });


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

  const [shirtsSizeTable] = useState({
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

  const [colorTable] = useState({
    params: {
      title: "Kolor",
      icon: "",
      showFilterOptions: false,
      style: {
        display: "flex",
        width: "30%",
        justifyContent: "center",
      },
      key : 'color'
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
        
      </div>
        
    </div>
    
  );
}

export default Filter;

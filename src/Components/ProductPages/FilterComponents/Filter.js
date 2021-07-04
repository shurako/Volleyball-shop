import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../ClothesPage.css'
import { addFilter, removeFilter } from "../../../actions";
import FilterProp from "./FilterProp";

function Filter() {
  const filterKey = useSelector((state) => state.FilterKey )
  const dispatch = useDispatch();

  const [shoesSizeTable, setShoesSizeTable] = useState({
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

  const [colorTable, setColorTable] = useState({
    params: {
      title: "Kolor",
      icon: "",
      showFilterOptions: false,
      key : 'color',
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

  const handleCategory = () => {
    
    const item = filterKey.filter(item => item.key == 'category');
    if(item[0].value == 'shoes'){return shoesSizeTable}
    else return colorTable
  }
  return (
    <div className={"filter-section__wrapper"}>
      <div className = {'filter-section'}>
        <FilterProp filterProp = {handleCategory()} />
        <FilterProp filterProp = {brandTable} />
        <FilterProp filterProp = {colorTable} />
      </div>
        
    </div>
    
  );
}

export default Filter;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../ClothesPage.css'
import { addFilter, removeFilter } from "../../../actions";
import FilterProp from "./FilterProp";

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

  return (
    <div className={"filter-section__wrapper"}>
      <div className = {'filter-section'}>
        <FilterProp filterProp = {brandTable} />
        <FilterProp filterProp = {colorTable} />
      </div>
        
    </div>
    
  );
}

export default Filter;

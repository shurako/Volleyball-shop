import React, { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsFilter } from 'react-icons/bs';
import { animated, useTransition } from 'react-spring';
import ProductCard from "../ProductComponents/ProductCard";
import { ProductData } from "../ProductData";
import ClearBtn from "./Buttons/ClearBtn";
import "./ProductPages.css";

function ProductPage(props) {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const filteredArray = [];
  const [viewAll, setviewAll] = useState(true);
  const [searchTerm, setSearchTerm] = useState([]);
  
  
  const [sizeTable, setSizeTable] = useState({
    params: {
      title: "Rozmiar",
      icon: "",
      showFilterOptions: true,
      style: {},
    },
    values: [
      {
        value: "37",
        isCkecked: true,
      },
      {
        value: "38",
        isCkecked: true,
      },
      {
        value: "39",
        isCkecked: true,
      },
      {
        value: "40",
        isCkecked: true,
      },
      {
        value: "41",
        isCkecked: true,
      },
      {
        value: "42",
        isCkecked: true,
      },
      {
        value: "43",
        isCkecked: true,
      },
      {
        value: "44",
        isCkecked: true,
      },
      {
        value: "45",
        isCkecked: true,
      },
      {
        value: "46",
        isCkecked: true,
      },
      {
        value: "47",
        isCkecked: true,
      },
      {
        value: "48",
        isCkecked: true,
      },
      {
        value: "49",
        isCkecked: true,
      },
      {
        value: "50",
        isCkecked: true,
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
        isCkecked: true,
      },
      {
        value: "white",
        isCkecked: true,
      },
      {
        value: "black",
        isCkecked: true,
      },
      {
        value: "green",
        isCkecked: true,
      },
      {
        value: "yellow",
        isCkecked: true,
      },
      {
        value: "pink",
        isCkecked: true,
      },
    ],
  });


  const addFilterTerm = (item) => {
    setSearchTerm([...searchTerm, item]);
  };

  const removeFilterItem = (item) => {
    const selection = searchTerm;
    const itemPos = searchTerm.indexOf(item);

    if (searchTerm.includes(item)) {
      const { [itemPos]: item, ...rest } = selection;

      setSearchTerm(Object.values(rest));
    } else {
    }
  };

  // FUNCTION CHECKS IF OBJECT ALREADY EXIST IN ARRAY
  const arrayDuplicateCheck = (item, arr) => {
    if (arr.includes(item)) {
      return true;
    } else return false;
  };
  // FUNCTIONS CREATES ARRAY OF FILTERED OBJECTS
  const createFilteredArray = (arr) => {
    arr.filter((val) => {
      Object.keys(val).map((key, i) => {
        if (Array.isArray(val[key])) {
          searchTerm.map((term) => {
            if (val[key].includes(term)) {
              if (!arrayDuplicateCheck(val, filteredArray)) {
                filteredArray.push(val);
              }
            }
          });
        }
      });

      return filteredArray;
    });

    return filteredArray;
  };
  //RENDERS ALL
  const renderAll = () => {
    return (
      <div className = {'main-section'}>
          <div className  ={'section-title'}>POLECAMY</div>
          {ProductData.map(items => {return(<div className = {'promoted-products__wrapper'}>{items.shoes.map(item => {return(<ProductCard total = {props.total} setTotal = {props.setTotal}  size = {item.size} photo = {item.photo} price = {item.price} title = {item.title}/>)})} </div>)})}
 

       
      </div>
  )
  };
  //FUNCTION RENDERS FILTERED OBJECTS
  const [slideFilters, setSlideFilters] = useState(false);
  const transitions = useTransition(slideFilters, {
    from : {opacity : 0, y : '-100%', overflow : 'hidden', width : '100%', justifyContent : 'center', display : 'flex', flexDirection : 'column', alignItems : 'center'},
    enter : {opacity : 1, y : '0%', overflow : 'hidden',  },
    leave : {opacity : 0, y : '-100%', overflow : 'hidden',},
    config : {duration : 150}
  })
  const renderFiltered = () => {
    createFilteredArray(ProductData[0].shoes);
    let test = [];
    filteredArray.map((item) => {
      Object.keys(item).map((key, i) => {
        if (Array.isArray(item[key])) {
          item[key].map((el) => {
            if (!arrayDuplicateCheck(el, item.filterProperties)) {
              item.filterProperties.push(el);
            }
          });
        }
      });
    });

    filteredArray.map((item) => {
      if (searchTerm.every((el) => item.filterProperties.includes(el))) {
        test.push(item);
      }
    });

    return (
      <div  className={"promoted-products__wrapper"}>
        {" "}
        {test.map((item) => {
          return (
            <ProductCard
              
              size={item.size}
              price={item.price}
              title={item.title}
              photo={item.photo}
            
            />
          );
        })}
      </div>
    );
  };

  // FUNCTION CREATES ARRAY OF REFS FOR EACH FILTER PARAMETER
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  //FUNCTION CHECK IF ANY FILTER IS CHECKED


  //RENDER FILTERS
  const renderFilters = (prop, setprop, j) => {

    return(
      <div className={"filter-section__item"}>
        <div className={"filter-section__header"}>
          
          <div className={"filter-section__header-title"}>
            <p
              onClick={() => {
                setprop({
                  ...prop,
                  params: {
                    ...prop.params,
                    showFilterOptions: !prop.params.showFilterOptions,
                  },
                });
              }}
            >
              {prop.params.title}
            </p>
          </div>
          <div className={"filter-section__header-button__wrapper"}>
            <button className={""}>
              <AiOutlineCaretDown />
            </button>
          </div>
        </div>
        <div className={"filter__wrapper"}>
          {prop.params.showFilterOptions
            ? prop.values.map((size, i) => {
                return (
                  <div
                    style={prop.params.style}
                    ref={addToRefs}
                    onClick={() => {
                      if (size.isCkecked) {
                        addFilterTerm(size.value);
                        revealRefs.current[i + j].style.backgroundColor =
                          "royalblue";
                        size.isCkecked = !size.isCkecked;
                        setviewAll(false)
                      } else {
                        removeFilterItem(size.value);
                        revealRefs.current[i + j].style.backgroundColor =
                          "transparent";
                        size.isCkecked = !size.isCkecked;

                      }
                    }}
                  >
                    {size.value}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    );
  };



  return (
    <div className={"flex mobile"}>
      <div className = {'filter-section__wrapper'} >
      <div className={"filter-section"}>
        <div onClick = {() => setSlideFilters(!slideFilters)} className = {'title__wrapper'}><BsFilter/><h3>Filtry</h3></div>
         
        {transitions((styles, item) => item ? <animated.div style = {styles}>{renderFilters(sizeTable, setSizeTable, 0)}
        {renderFilters(colorTable, setColorTable, sizeTable.values.length)}
         <ClearBtn viewAll = {viewAll} setviewAll = {setviewAll} /></animated.div> : <div></div> )}
         
         
         
        
        
      </div>
      </div>
      {viewAll ? renderAll() : renderFiltered()}
    </div>
  );
}

export default ProductPage;

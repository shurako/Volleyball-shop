import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../ClothesPage.css'
import { addFilter, removeFilter } from "../../../actions";
import {animated, useSpring, useTransition} from 'react-spring'

function FilterProp(prop) {
    const dispatch = useDispatch()

    

    const[ slideFilters, setSlideFilters] = useState(false)  
    const transitions = useTransition(slideFilters, {
      from : {opacity : 0, y : '0%', overflow : 'hidden', width : '100%',  display : 'flex',alignItems : 'center'},
      enter : {opacity : 1, y : '0%', overflow : 'hidden',  },
      leave : {opacity : 0, y : '-100%', overflow : 'hidden',},
      config : {duration : 150}
    })

    
    const renderFilter = (prop) => {
        return (
          <div className = {'filter-section__item'}>
            <div onClick = {() => {setSlideFilters(!slideFilters)}} className={"filter-section__header"}>
              <h3>{prop.params.title}</h3>
            </div>
            {transitions((styles, item) => item ?  <animated.div style = {styles} className = {'filter__wrapper'}> 
              {prop.values.map((item) => {
                return (
                  <div className = {  item.isCkecked ? 'active' : ''  }
                    onClick={() => {
                      item.isCkecked = !item.isCkecked;
                      if (item.isCkecked == true) {
                        dispatch(
                          addFilter({ key: prop.params.key, value: [item.value] })
                        );
                      } else {
                        dispatch(
                          removeFilter({
                            key: prop.params.key,
                            value: [item.value],
                          })
                        );
                      }
                    }}
                  >
                    {item.value}
                  </div>
                );
              })}
            </animated.div> : '' )}
           
          </div>
        );
      };

    return (
        <div className = {'filter-section__item'}>
            {renderFilter(prop.filterProp)}
        </div>
    )
}

export default FilterProp

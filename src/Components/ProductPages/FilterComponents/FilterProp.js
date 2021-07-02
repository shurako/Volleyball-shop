import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../ClothesPage.css'
import { addFilter, removeFilter } from "../../../actions";

function FilterProp(prop) {
    const dispatch = useDispatch()

    const renderFilter = (prop) => {
        return (
          <div>
            <div className={"filter-section__header"}>
              <h3>{prop.params.title}</h3>
            </div>
            <div className = {'filter__wrapper'}> 
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
            </div>
          </div>
        );
      };

    return (
        <div className = {''}>
            {renderFilter(prop.filterProp)}
        </div>
    )
}

export default FilterProp

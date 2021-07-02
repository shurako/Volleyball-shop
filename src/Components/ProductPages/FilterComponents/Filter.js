import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../../../actions";

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

  const renderFilter = (prop) => {
    return (
      <div>
        <div className={"filter-section__header"}>
          <h3>{prop.params.title}</h3>
        </div>
        <div className = {'filter__wrapper'}> 
          {prop.values.map((item) => {
            return (
              <div
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
    <div className={"filter-section__wrapper"}>
      <div className={"filter-section"}>
        <div className={"filter-section__item"}>{renderFilter(brandTable)}</div>
      </div>
    </div>
  );
}

export default Filter;

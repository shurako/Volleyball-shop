export const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};

export const decrement = (data) => {
  return {
    type: "MINUS",
    payload: data,
  };
};

export const add = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const remove = (data) => {
  return {
    type: "REMOVE",
    payload: data,
  };
};

export const show = () => {
    return { 
        type : 'TRUE'
    }
}

export const hide = () => {
    return { 
        type : 'FALSE'
    }
}

export const setProducts = (data) => {
  return{
    type : 'SET_PRODUCTS',
    payload : data
  }
}

export const addFilter = (data) => {
  return{
    type : 'ADD_FILTER',
    payload : data
  }
}
export const removeFilter = (data) => {
  return{
    type : 'REMOVE_FILTER',
    payload : data
  }
}

export const setCategory = (data) => {
  return{
    type : 'SET_CATEGORY',
    payload : data
  }
}
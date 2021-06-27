/* eslint-disable no-fallthrough */
const basketData = (state = [], action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "REMOVE": {
      const selection = state;
      const itemPos = state.indexOf(action.payload);

      if (selection.includes(action.payload)) {
        const { [itemPos]: item, ...rest } = selection;
        return [rest];
      }
      
    }
    default : return state;
      
  }
};

export default basketData;

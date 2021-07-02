const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT' : 
            return state + action.payload;
        case 'MINUS' : {return parseInt(state - action.payload);}
        default : return state;
    }
}

export default counterReducer
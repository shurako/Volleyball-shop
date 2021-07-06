

const FilterKey = (state = [], action) => {
    let temp = state
    
    switch(action.type){
        // {state = temp.value.push(action.payload.value); return state}
        case 'ADD_FILTER' : if(!state.some(item => item.key === action.payload.key)){return [...state, action.payload]}
                            else if(state.some(item => item.key === action.payload.key)){
                                const test = state.filter(item => item.key == action.payload.key)
                                if(!test[0].value.includes(action.payload.value[0])){
                                    test[0].value = test[0].value.concat(action.payload.value)
                                    return[...state]
                                }
                                
                            }

     
        // eslint-disable-next-line no-fallthrough
        case 'REMOVE_FILTER' :  
                                if(state.some(item => item.value.includes(action.payload.value[0]) && item.value.length > 1)  ){
                
                                    const temp = state.filter( item => item.value.includes(action.payload.value[0]))
                                    temp[0].value = temp[0].value.filter(item => item  !== action.payload.value[0] )
                                    return [...state]
                                }
                                else{ return state.filter(element => JSON.stringify(element) !== JSON.stringify(action.payload))}

        case "SET_CATEGORY" : return [ action.payload]
                                
                               
        
                                 
        
   
                            
          
        
        default : return state
    }
}


    export default FilterKey
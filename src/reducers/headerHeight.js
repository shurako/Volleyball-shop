const headerHeight = (state = 0, action) => {
    switch(action.type){
        case 'HEADER_HEIGHT' : return action.payload;
        default : return state
    }
    

}
export default headerHeight
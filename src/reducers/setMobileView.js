const setMobileView = (state = false, action) => {
    switch(action.type){
        case 'SET_MOBILE' : 
            return true 
        case 'SET_DESKTOP' : return false
        default : return state;
    }
}
    export default setMobileView


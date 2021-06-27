export const increment = (data) => {
    return{
        type: 'INCREMENT',
        payload : data
    }
}
export const add = (data) => {
    return{
        type : 'ADD',
        payload : data
    }
}

export const remove = (data) => {
    return{
        type: 'REMOVE',
        payload : data
    }
}
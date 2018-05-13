import * as types from '../types';
const state={
    items:[
        {id:1,name:"BMW",price:110},
        {id:2,name:"Google",price:200},
        {id:3,name:"Apple",price:250},
        {id:4,name:"Twitter",price:8},
    ]
}
const getters={
[types.ALL_STOCKS]:state=>{
    return state.items
}
}
export default{
    state,
    getters
}
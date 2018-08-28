import {ADD_DISH_REQUEST, ADD_TO_BASKET, DELETE_ITEM, FETCH_ALL_MENU_REQUEST, FETCH_ITEM_REQUEST} from "./types";


export const clickAddDish = (payload) => ({
    type:ADD_DISH_REQUEST,
    payload:payload.addDish.values
})

export const fetchAllMenu = () => ({
    type:FETCH_ALL_MENU_REQUEST
})

export const fetchItem = (id) => ({
    type:FETCH_ITEM_REQUEST,
    id
})

export const addToBasket = (payload) => ({
    type:ADD_TO_BASKET,
    payload
})

export const deleteItem = (id) => ({
    type:DELETE_ITEM,
    id
})







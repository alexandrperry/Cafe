import {List} from 'immutable'
import {ADD_TO_BASKET, DELETE_ITEM} from "../actions/types";

export default function (state = List(),action) {
    switch(action.type) {
        case ADD_TO_BASKET:{
            return state.push(action.payload)
        }
        case DELETE_ITEM:{
            const lastIndex = state.findLastIndex(item => item.id === action.id)
            return state.delete(lastIndex)
        }
        default:{
            return state
        }
    }

}
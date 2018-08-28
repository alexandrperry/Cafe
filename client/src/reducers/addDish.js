import {Map,fromJS} from 'immutable'
import {ADD_DISH_SUCCESS, ADD_DISH_FAILURE, ADD_DISH_REQUEST} from "../actions/types";

const initialState = Map().set('data',Map()).set('success',null).set('error',null).set('loading',null)

export default function (state = initialState,action) {
    switch (action.type){
        case ADD_DISH_REQUEST:{
            const newState = Map().set('loading',true)
            return state.merge(newState)
        }
        case ADD_DISH_SUCCESS:{
            const newState = Map().set('data',fromJS(action.data)).set('success',true).set('loading',false)
            return state.merge(newState)
        }
        case ADD_DISH_FAILURE:{
            const newState = Map().set('error',true).set('loading',false)
            return state.merge(newState)
        }
        default:{
            return state
        }
    }
}
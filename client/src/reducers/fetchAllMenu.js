import {Map,List,fromJS} from 'immutable'
import {FETCH_ALL_MENU_FAILURE, FETCH_ALL_MENU_REQUEST, FETCH_ALL_MENU_SUCCESS} from "../actions/types";


const initialState = Map().set('data',List()).set('success',null).set('error',null).set('loading',null)

export default function (state = initialState,action) {
    switch (action.type){
        case FETCH_ALL_MENU_REQUEST:{
            const newState = Map().set('loading',true).set('success',null).set('error',null)
            return state.merge(newState)
        }
        case FETCH_ALL_MENU_SUCCESS:{
            const newState = Map().set('data',fromJS(action.data)).set('success',true).set('loading',false)
            return state.merge(newState)
        }
        case FETCH_ALL_MENU_FAILURE:{
            const newState = Map().set('error',true).set('loading',false).set('success',false)
            return state.merge(newState)
        }
        default:{
            return state
        }
    }
}
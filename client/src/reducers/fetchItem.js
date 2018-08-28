import {Map,fromJS} from 'immutable'
import {FETCH_ITEM_FAILURE, FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS} from "../actions/types";


const initialState = Map().set('data',Map()).set('success',null).set('error',null).set('loading',null)

export default function (state = initialState,action) {
    switch (action.type){
        case FETCH_ITEM_REQUEST:{
            const newState = Map().set('loading',true)
            return state.merge(newState)
        }
        case FETCH_ITEM_SUCCESS:{
            const newState = Map().set('data',fromJS(action.data)).set('success',true).set('loading',false)
            return state.merge(newState)
        }
        case FETCH_ITEM_FAILURE:{
            const newState = Map().set('error',true).set('loading',false)
            return state.merge(newState)
        }
        default:{
            return state
        }
    }
}
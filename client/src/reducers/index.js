import {combineReducers} from 'redux';
import addDish from './addDish'
import {reducer as formAddDish } from 'redux-form';
import fetchAllMenu from './fetchAllMenu'
import fetchItem from './fetchItem'
import basket from './basket'


const appReducer = combineReducers({
    form:formAddDish,
    addDish,
    fetchAllMenu,
    fetchItem,
    basket
});

const rootReducer = (state, action) => {
    if (action.type === 'ERROR') {
        state = undefined
    }

    return appReducer(state, action)
};
export default rootReducer;

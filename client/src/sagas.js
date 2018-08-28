
import axios from 'axios';
import {all,put,takeEvery,fork,call} from 'redux-saga/effects'
import {
    ADD_DISH_FAILURE, ADD_DISH_REQUEST, ADD_DISH_SUCCESS, FETCH_ALL_MENU_FAILURE, FETCH_ALL_MENU_REQUEST,
    FETCH_ALL_MENU_SUCCESS, FETCH_ITEM_FAILURE, FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS
} from "./actions/types";



export  function* rootSaga() {
    yield all([
        fork(watcherAddDish),
        fork(watcherFetchAllMenu),
        fork(watcherFetchItem)
    ])
}

export  function* watcherAddDish(){
    yield takeEvery(ADD_DISH_REQUEST,workerAddDish)
}

export function postDish(data) {
    return axios.post('/api/add',data)
}

export function* workerAddDish(action) {
    console.log('action',action)
    try {
        const response = yield call(postDish,action.payload);
        const data = response.data;
        yield put({ type: ADD_DISH_SUCCESS, data });
    } catch (error) {
        console.error(error);
        yield put({ type: ADD_DISH_FAILURE, error });
    }
}




export  function* watcherFetchAllMenu(){
    yield takeEvery(FETCH_ALL_MENU_REQUEST,workerFetchAllMenu)
}

export function getAllMenu() {
    return axios.get('/api/catalog')
}

export function* workerFetchAllMenu(action) {
    try {
        const response = yield call(getAllMenu);
        const data = response.data;
        yield put({type: FETCH_ALL_MENU_SUCCESS, data})
    }catch(error) {
        console.error(error);
        yield put({ type: FETCH_ALL_MENU_FAILURE, error });
    }
}


export  function* watcherFetchItem(){
    yield takeEvery(FETCH_ITEM_REQUEST,workerFetchItem)
}

export function getItem(id) {
    return axios.get(`/api/catalog/${id}`)
}

export function* workerFetchItem(action) {
    try {
        const response = yield call(getItem,action.id);
        const data = response.data;
        yield put({type: FETCH_ITEM_SUCCESS, data})
    }catch(error) {
        console.error(error);
        yield put({ type: FETCH_ITEM_FAILURE, error });
    }
}
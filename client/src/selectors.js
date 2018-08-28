import { createSelector } from 'reselect'
import {Map} from 'immutable'

const menuSelector = state => state.fetchAllMenu;
const item = state => state.fetchItem;
const basket = state => state.basket



export const allMenuSelector = createSelector(
    menuSelector,
    (item) => {
        return item
    }
)

export const pizzaMenuSelector = createSelector(
    menuSelector,
    (data) => {
        const filterArr = data.get('data').filter((item) => {
            return item.get('type') === 'pizza';
        })
        const mergedArr =  data.set('data',filterArr)
        return mergedArr
    }
)

export const wingsMenuSelector = createSelector(
    menuSelector,
    (data) => {
        const filterArr = data.get('data').filter((item) => {
            return item.get('type') === 'wings';
        })
        const mergedArr =  data.set('data',filterArr)
        return mergedArr
    }
)

export const saladMenuSelector = createSelector(
    menuSelector,
    (data) => {
        const filterArr = data.get('data').filter((item) => {
            return item.get('type') === 'salad';
        })
        const mergedArr =  data.set('data',filterArr)
        return mergedArr
    }
)

export const itemSelector = createSelector(
    item,
    (data) => {
        return data
    }
)

export const basketSelector = createSelector(
    basket,
    (data) => {
        return data
    }
)

export const sumSelector = createSelector(
    basket,
    (data) => {
        return data.reduce((acc,item) => {
            return acc + item.price

        },0)
    }
)



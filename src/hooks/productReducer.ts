import {useReducer } from 'react';
import * as types from './types';
import { ProductsTableRow } from '../views/product/product.interface';



const initialState = {

     product:[
        {
            id: "",        
            brand: "",
            description: "",
            image: "",
            price: 0,
        },
      ],

}

const reducer = (state, action) => {

    switch (action.type) {

        case types.GET_PRODUCT:
            console.log(`from reducer get product: ${action.data[0]}`)
            return {
                ...state,
                product: action.data,
            }
        case types.ADD_PRODUCT:
            return {}
        case types.UPDATE_PRODUCT:
            return {}
        case types.DELETE_PRODUCT:
            return {}
        case types.LOADING:
            return {
                ...state,
            }
        default:
            return state;
    }


}

export default function useProductReducer() {
    const [store,dispatch] = useReducer(reducer, initialState);
    return [store,dispatch];

}
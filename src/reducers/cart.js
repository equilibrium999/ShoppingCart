import * as types from "./../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = [{
    "product" : {
        "id": 1,
        "name": "iPhone 7plus",
        "image": "https://images-na.ssl-images-amazon.com/images/I/41DvAKt7CaL._SY445_.jpg",
        "description": "Design by Apple",
        "price": 500,
        "inventory": 10,
        "rating" : 4 
    },
    "quantity": 5
},{
    "product": {
        "id": 2,
        "name": "Samsung Galaxy S7",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71VEYuQ8yrL._SY550_.jpg",
        "description": "Design by Samsung",
        "price": 400,
        "inventory": 15,
        "rating" : 3
    },
    "quantity": 2
},{
    "product": {
        "id": 3,
        "name": "Oppo F1s",
        "image": "https://cf3.s3.souqcdn.com/item/2017/06/19/11/50/97/96/item_XL_11509796_32691760.jpg",
        "description": "Design by Oppo",
        "price": 450,
        "inventory": 5,
        "rating" : 5
    },
    "quantity": 4
}];

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: 
            return [...state];
    }
};

export default cart;
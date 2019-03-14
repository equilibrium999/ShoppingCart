var initialState = [{
    "id": 1,
    "name": "iPhone 7plus",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41DvAKt7CaL._SY445_.jpg",
    "description": "Design by Apple",
    "price": 500,
    "inventory": 10,
    "rating" : 4
},{
    "id": 2,
    "name": "Samsung Galaxy S7",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71VEYuQ8yrL._SY550_.jpg",
    "description": "Design by Samsung",
    "price": 400,
    "inventory": 15,
    "rating" : 3
},{
    "id": 3,
    "name": "Oppo F1s",
    "image": "https://cf3.s3.souqcdn.com/item/2017/06/19/11/50/97/96/item_XL_11509796_32691760.jpg",
    "description": "Design by Oppo",
    "price": 450,
    "inventory": 5,
    "rating" : 5
}];

const product = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return [...state];
    }
};

export default product;
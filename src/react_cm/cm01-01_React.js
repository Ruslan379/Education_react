/*
* - Conspect Module - 01-01_React
TODO
! ========================================
 */
// TODO

/*
* -
! ========================================
 */
//! ___React-элементы___

// import React from "react";

// const link = React.createElement(
//     "a",
//     {
//         href: "https://reactjs.org/",
//         target: "_blank",
//         rel: "noreferrer noopener",
//     },
//     "Ссылка на reactjs.org"
// );
//? ========================================

import React from "react";

const image = React.createElement("img", {
    src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    alt: "Tacos With Lime",
    width: 640,
});
const title = React.createElement("h2", null, "Tacos With Lime");
const price = React.createElement("p", null, "Price: 10.99$");
const button = React.createElement("button", { type: "button" }, "Add to cart");

const product = React.createElement("div", null, image, title, price, button);
console.log(image);

/*
 * Для передачи детей также используется свойство children параметра props.
 * Обратите внимание на то, что свойство children это массив.
 */
const productWithChildrenInProps = React.createElement("div", {
    children: [image, title, price, button],
});

/*
* -
! ========================================
 */



/*
* -
! ========================================
 */



/*
* -
! ========================================



 */
//! ___Компоненты-функции___

// const MyFunctionalComponent = props => <div>Functional Component</div>;

// const Product = props => (
//     <div>
//         <img
//             src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//             alt="Tacos With Lime"
//             width="640"
//         />
//         <h2>Tacos With Lime</h2>
//         <p>Price: 10.99$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );

// // В разметке компонент записывается как JSX-тег
// ReactDOM.createRoot(document.getElementById("root")).render(<Product />);

// console.log(Product);

/*
* -
! ========================================
 */

// const App = () => (
//     <>
//         <h1>Best selling products</h1>
//         <Product name="Tacos With Lime" />
//     </>
// );


/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */


/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */


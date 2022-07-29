/*
* - Conspect Module - 01-01_React
TODO
! ========================================
 */
// TODO

import React from 'react';
// import ReactDOM from 'react-dom/client'; //! ReactDOM.createRoot(document.getElementById("root")).render(image);
import ReactDOM from 'react-dom'; //! ReactDOM.render(image, document.querySelector("#root"));

/*
* -
! ========================================
 */

//! ___React-элементы___

// const link = React.createElement(
//     "a",
//     {
//         href: "https://reactjs.org/",
//         target: "_blank",
//         rel: "noreferrer noopener",
//     },
//     "Ссылка на reactjs.org"
// );

// console.log(link);
//? ========================================



// const image = React.createElement("img", {
//     src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//     alt: "Tacos With Lime",
//     width: 640,
// });
// console.log(image);

// const title = React.createElement("h2", null, "Tacos With Lime");
// console.log(title);

// const price = React.createElement("p", null, "Price: 10.99$");
// console.log(price);

// const button = React.createElement("button", { type: "button" }, "Add to cart");
// console.log(button);

// const product = React.createElement("div", null, image, title, price, button);
// console.log(product);

// /*
//  * Для передачи детей также используется свойство children параметра props.
//  * Обратите внимание на то, что свойство children это массив.
//  */
// const productWithChildrenInProps = React.createElement("div", {
//     children: [image, title, price, button],
// });
// console.log(productWithChildrenInProps);

/*
* -
! ========================================
 */

//! ___Рендер элемента в DOM-дерево___


// ReactDOM.createRoot(document.getElementById("root")).render(image);



// ReactDOM.render(image, document.querySelector("#root"));


/*
* -
! ========================================
 */
//! ___JSX___

//* Plain JavaScript
// const link1 = React.createElement(
//     "a",
//     {
//         href: "https://reactjs.org/",
//         target: "_blank",
//         rel: "noreferrer noopener",
//     },
//     "Ссылка на reactjs.org"
// );
// console.log(link1);

//* JSX
// const linkWithJSX = (
//     <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
//         Ссылка на reactjs.org
//     </a>
// );
// console.log(linkWithJSX);

//? ========================================
// const imageUrl =
//     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const price1 = 10.99;

// const product1 = (
//     <div>
//         <img src={imageUrl} alt="Tacos With Lime" width="640" />
//         <h2>Tacos With Lime</h2>
//         <p>Price: {price1}$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );
// ReactDOM.render(product1, document.querySelector("#root"));

/*
* -
! ========================================
/*
 */

//! ___Компоненты-функции___

const MyFunctionalComponent = props => <div>Functional Component</div>;

//? ========================================
const Product = props => (
    <div>
        <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
            alt="Tacos With Lime"
            width="640"
        />
        <h2>Tacos With Lime</h2>
        <p>Price: 12.99$</p>
        <button type="button">Add to cart</button>
    </div>
);

// В разметке компонент записывается как JSX-тег
ReactDOM.createRoot(document.getElementById("root")).render(<Product />);

console.log(Product);

/*
* -
! ========================================
 */

//! ___Свойства компонента (props)___

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


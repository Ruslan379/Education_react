/*
* - Conspect Module - 01-01_React
TODO
! ========================================
 */
// TODO

import React from 'react';
// import ReactDOM from 'react-dom/client'; //! 1-й вариант: ReactDOM.createRoot(document.getElementById("root")).render(image);
import ReactDOM from 'react-dom'; //! 2-й вариант: ReactDOM.render(image, document.querySelector("#root"));

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

// // ReactDOM.createRoot(document.getElementById("root")).render(link);
// ReactDOM.render(link, document.querySelector("#root"));

/*
* -
! ========================================
 */

//! ___React-элемент с детьми, карточка продукта ___

// const image = React.createElement("img", {
//     src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//     alt: "Tacos With Lime",
//     width: 640,
// });
// console.log(image);

// const title = React.createElement("h2", null, "Tacos With Lime");
// console.log(title);

// const price = React.createElement("p", null, "Price: 15.99$");
// console.log(price);

// const button = React.createElement("button", { type: "button" }, "Add to cart");
// console.log(button);

// //! ------------------------------------------------------------------------------
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

// //! так не работает, рендерится тоько последний элемент
// // ReactDOM.render(image, document.querySelector("#root"));
// // ReactDOM.render(title, document.querySelector("#root"));
// // ReactDOM.render(price, document.querySelector("#root"));
// // ReactDOM.render(button, document.querySelector("#root"));
// //! так не работает, рендерится тоько последний элемент

// ReactDOM.createRoot(document.getElementById("root")).render(product); //! 1-й вариант Рендера элемента в DOM-дерево
// // ReactDOM.render(product, document.querySelector("#root"));  //! 2-й вариант Рендера элемента в DOM-дерево

// // ReactDOM.render(productWithChildrenInProps, document.querySelector("#root"));


/*
* -
! ========================================
 */

//! ___Рендер элемента в DOM-дерево___

// ReactDOM.createRoot(document.getElementById("root")).render(image); //! 1-й вариант Рендера элемента в DOM-дерево

// ReactDOM.render(image, document.querySelector("#root")); //! 2-й вариант Рендера элемента в DOM-дерево

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

/*
* -
! ========================================
 */

//! ___Перепишем карточку продукта на JSX___

// const imageUrl =
//     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const price1 = 13.99;

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
 */

//! ___Правило общего родителя___
//? ___код с не валидной JSX-разметкой___

// const post1 = (
//     <h2>Post Header</h2>
//     <p>Post text</p>
// );

// const post2 = (
//     React.createElement('h2', null, 'Post Header')
//     React.createElement('p', null, 'Post text')
// );
//?______________________________________



//? ___код с валидной JSX-разметкой 1 вариант___
// const post3 = (
//     <div>
//         <h2>Post Header</h2>
//         <p>Post text</p>
//     </div>
// );

//? ___код с валидной JSX-разметкой 2 вариант___
// const post3 = (
//     <>
//         <h2>Post Header</h2>
//         <p>Post text</p>
//     </>
// );

// ReactDOM.render(post3, document.querySelector("#root"));

//? ___код с валидной JSX-разметкой___
//* ---------------------------------------------------
// const post4 = React.createElement(
//     "div",
//     null,
//     React.createElement("h2", null, "Post Header"),
//     React.createElement("p", null, "Post text")
// );

// ReactDOM.render(post4, document.querySelector("#root"));
//* ---------------------------------------------------

/*
* -
! ========================================
 */

//! ___Компоненты-функции___

// const MyFunctionalComponent = props => <div>Functional Component</div>;

//? ========================================
const Product = props => (
    <div>
        <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
            alt="Tacos With Lime"
            width="640"
        />
        <h2>Tacos With Lime</h2>
        <p>Price: 14.99$</p>
        <button type="button">Add to cart</button>
    </div>
);

//! В разметке компонент записывается как JSX-тег
// ReactDOM.createRoot(document.getElementById("root")).render(<Product />);  //! 1-й вариант
ReactDOM.render(<Product />, document.querySelector("#root")); //! 2-й вариант

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


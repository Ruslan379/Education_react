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
// const Product = props => (
//     <div>
//         <img
//             src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//             alt="Tacos With Lime"
//             width="640"
//         />
//         <h2>Tacos With Lime</h2>
//         <p>Price: 14.99$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );

// //! В разметке компонент записывается как JSX-тег
// // ReactDOM.createRoot(document.getElementById("root")).render(<Product />);  //! 1-й вариант
// ReactDOM.render(<Product />, document.querySelector("#root")); //! 2-й вариант

// console.log(Product);

/*
* -
! ========================================
 */

//! ___Свойства компонента (props)-1___

// const App = () => (
//     <>
//         <h1>Best selling products</h1>
//         <Product name="Tacos With Lime" />
//     </>
// );

// const Product = props => (
//     <div>
//         <img src={props.imgUrl} alt={props.name} width="640" />
//         <h2>{props.name}</h2>
//         <p>Price: {props.price}$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );

// ReactDOM.render(<App />, document.querySelector("#root")); //! 2-й вариант
/*
* -
! ========================================
 */

//! ___Свойства компонента (props)-2___
//! ___Значение пропсов по умолчанию___

// const Product = ({
//     imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//     name,
//     price
// }) => (
//     <div>
//         <img src={imgUrl} alt={name} width="640" />
//         <h2>{name}</h2>
//         <p>Price: {price}$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );

// const App = () => (
//     <div>
//         <h1>Best selling products</h1>
//         <Product
//             // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//             name="Tacos With Lime"
//             price={9.99}
//         />
//         <Product
//             imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//             name="Fries and Burger"
//             price={14.29}
//         />
//     </div>
// );

// ReactDOM.render(<App />, document.querySelector("#root")); //! 2-й вариант

/*
* -
! ========================================
 */

//! ___Свойство props.children___

// const Profile = ({ name, email }) => (
//     <div>
//         <p>Name: {name}</p>
//         <p>Email: {email}</p>
//     </div>
// );

// const Panel = ({ title, children }) => (
//     <section>
//         <h2>{title}</h2>
//         {children}
//     </section>
// );

// const App = () => (
//     <div>
//         <Panel title="User profile">
//             <Profile name="Mango" email="mango@mail.com" />
//         </Panel>
//     </div>
// );

// ReactDOM.render(<App />, document.querySelector("#root")); //! 2-й вариант

/*
* -
! ========================================
 */

//! ___Рендер по условию___
//! ___if с помощью логического оператора &&___

// const Mailbox = ({ unreadMessages }) => {
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 && (
//                 <p>You have {unreadMessages.length} unread messages.</p> //! Читается как: если условие приводится к true, то рендерим разметку.
//             )}
//         </div>
//     );
// };

/*
* -
! ========================================
 */

//! ___Рендер по условию___
//! ___if...else с помощью тернарного оператора-1___

// const Mailbox = ({ username, unreadMessages }) => {
//     return (
//         <div>
//             <h1>Hello {username}</h1>
//             {unreadMessages.length > 0
//                 ? (<p>You have {unreadMessages.length} unread messages.</p>)
//                 : (<p>No unread messages.</p>)
//             }
//         </div>
//     );
// };

//? ============================или так: =========================
// const Mailbox = ({ name, unreadMessages }) => {
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             <p>
//                 {unreadMessages.length > 0
//                     ? `You have ${unreadMessages.length} unread messages.`
//                     : "No unread messages."}
//             </p>
//         </div>
//     );
// };


/*
* -
! ========================================
 */

//! ___Рендер по условию___
//! ___if...else с помощью тернарного оператора-2___

// const Product = ({ imgUrl, name, price, quantity }) => (
//     <div>
//         <img src={imgUrl} alt={name} width="640" />
//         <h2>{name}</h2>
//         <p>Price: {price}$</p>
//         <h1>Quantity: {quantity < 20 ? "Few left" : "In stock"}</h1>
//         <button type="button">Add to cart</button>
//     </div>
// );

/*
* -
! ========================================
 */

//! ___Коллекции + Ключи___

// const favouriteBooks = [
//     { id: "id-1", name: "JS for beginners" },
//     { id: "id-2", name: "React basics" },
//     { id: "id-3", name: "React Router overview" },
//     { id: "id-4", name: "Redux in depth" },
// ];

// const BookList = ({ books }) => {
//     return (
//         <ul>
//             {books.map(book => (
//                 <li key={book.id}>{book.name}</li>
//             ))}
//         </ul>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <BookList books={favouriteBooks} />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.querySelector("#root")); //! 2-й вариант

/*
* -
! ========================================
 */

//! ___Коллекции + Ключи - индексы массива.___

const favouriteBooks = [
    { name: "JS for beginners" },
    { name: "React basics" },
    { name: "React Router overview" },
    { name: "Redux in depth" },
];

const BookList = ({ books }) => {
    return (
        <ul>
            {books.map(book => (
                <li key={book.index}>{book.name}</li>
            ))}
        </ul>
    );
};

const App = () => {
    return (
        <div>
            <BookList books={favouriteBooks} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root")); //! 2-й вариант


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


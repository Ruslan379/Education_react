/*
* - Conspect Module - 01-02_React
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

//! ___Стилизация компонент___
//! ___Инлайн CSS___

// const buttonStyles = {
//     display: "inline-flex",
//     margin: "0 4px",
//     padding: "8px 24px",
//     border: 0,
//     borderRadius: 2,
//     fontSize: 14,
//     fontFamily: "inherit",
// };

// const Button = ({ type = "button", label, disabled }) => (
//     <button
//         type={type}
//         disabled={disabled}
//         style={{
//             ...buttonStyles,
//             backgroundColor: disabled ? "#0000001f" : "#2196f3",
//             color: disabled ? "#00000042" : "#ffffff",
//         }}
//     >
//         {label}
//     </button>
// );

/*
* -
! ========================================
 */

//! ___Ванильный CSS или SASS___

/* Button.css */
// .Button {
//     display: inline - flex;
//     margin: 0 4px;
//     padding: 8px 24px;
//     border: 0;
//     border - radius: 2px;
//     color: #ffffff;
//     font - size: 14px;
//     font - family: inherit;
//     background - color: #2196f3;
//     transition: background - color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms;
// }

// .Button: hover,
// .Button:focus {
//     background - color: #1976d2;
// }

// .Button - disabled {
//     background - color: #0000001f;
//     color: #00000042;
// }

//? ___Button.jsx___
// Button.jsx
// import "./Button.css";

// const Button = ({ type = "button", label, disabled }) => {
//     const btnClasses = ["Button"];

//     if (disabled) {
//         btnClasses.push("Button-disabled");
//     }

//     return (
//         <button type={type} disabled={disabled} className={btnClasses.join(" ")}>
//             {label}
//         </button>
//     );
// };

/*
* -
! ========================================
 */

//! ___CSS-модули___

//* Button.module.css
// .button {
//     display: inline - flex;
//     margin: 0 4px;
//     padding: 8px 24px;
//     border: 0;
//     border - radius: 2px;
//     color: #ffffff;
//     font - size: 14px;
//     font - family: inherit;
//     background - color: #2196f3;
//     transition: background - color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms;
// }

// .button: hover,
// .button:focus {
//     background - color: #1976d2;
// }

// .disabled {
//     background - color: #0000001f;
//     color: #00000042;
// }


//?  ====================================================
//* Button.jsx
// import styles from "./Button.module.css";

// const Button = ({ type = "button", label, disabled }) => {
//     const btnClasses = [styles.button];

//     if (disabled) {
//         btnClasses.push(styles.disabled);
//     }

//     return (
//         <button className={btnClasses.join(" ")} type={type} disabled={disabled}>
//             {label}
//         </button>
//     );
// };

/*
* -
! ========================================
 */

//! ___Композиция___

//* Button.module.css 
// .button {
//     display: inline - flex;
//     margin: 0 4px;
//     padding: 8px 24px;
//     border: 0;
//     border - radius: 2px;
//     font - size: 14px;
//     font - family: inherit;
//     transition: background - color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms;
// }

// .button: hover,
// .button:focus {
//     background - color: #1976d2;
// }

// .active {
//     composes: button;
//     color: #ffffff;
//     background - color: #2196f3;
// }

// .disabled {
//     composes: button;
//     color: #00000042;
//     background - color: #0000001f;
// }


//?  ====================================================
//* Button.jsx
// import styles from "./Button.module.css";

// const Button = ({ type = "button", label, disabled }) => {
//     const btnClass = disabled ? styles.disabled : styles.active;

//     return (
//         <button className={btnClass} type={type} disabled={disabled}>
//             {label}
//         </button>
//     );
// };

/*
* -
! ========================================
 */

//! ___Переменные___

//* variables.module.css 
// @value font - stack: Roboto, Arial, sans - serif;

//* Button.module.css 
// @value font - stack from 'path/to/variables.module.css';

// .button {
//     font - family: font - stack;
// }


/*
* -
! ========================================
 */

//! ___Глобальные стили___

//* Глобален по умолчанию */
// body {
//     color: #fff;
//     font - size: 16px;
// }

//* Так класс можно сделать глобальным
// : global(.my - class) {
//     color: #2196f3;
// }

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


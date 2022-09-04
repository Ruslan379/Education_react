import { useState, useEffect, useRef, useMemo } from 'react';
import React, { Component } from "react";
import useLocalStorage from '../hooks/useLocalStorage';


/*
* - Conspect Module - cm04-07&08_React
TODO
! ========================================
 */
// TODO

/*
* -
! ========================================
 */

//! ___Хук useState___

export const App1 = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            {value}
            <button type="button" onClick={() => setValue(value + 1)}>
                Increment value by 1
            </button>
        </div>
    );
};

/*
* -
! ========================================
 */
//! ___Различие с классами___


//! ❌ Плохо
const App2 = () => {
    const [state, setState] = useState({
        username: "",
        todos: [{ text: "Learn hooks" }],
        isModalOpen: false,
    });
};

//* ✅ Хорошо
const App3 = () => {
    const [username, setUsername] = useState("");
    const [todos, setTodos] = useState([{ text: "Learn hooks" }]);
    const [isModalOpen, setIsModalOpen] = useState(false);
};

/*
* -
! ========================================
 */

//! ___Ограничения хуков___

//! ❌ Будет ошибка:
//! React Hook "useState" вызывается условно. 
//! React Hooks должны вызываться в одном и том же 
//! порядке при рендеринге каждого компонента.
const isLoggedIn = true;
const App4 = () => {
    if (isLoggedIn) {
        // const [username, setUsername] = useState(""); //! ❌ Будет ошибка:
    }

    // ...
};

//* ✅ Так правильно использовать хуки
const App5 = () => {
    const [username, setUsername] = useState("");
};


/*
* -
! ========================================
 */

//! ___Хук useEffect___

export const App6 = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${value} times`;
    });

    return (
        <div>
            <p>You clicked: {value} times</p>
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </div>
    );
};

/*
* -
! ========================================
 */

//! ___Аналог componentDidMount___

export const App7 = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        // console.log("Mouting phase: same when componentDidMount runs"); //!
    }, []);

    return <button onClick={() => setValue(value + 1)}>{value}</button>;
};

/*
* - 
! ========================================
 */

//! ___OldCounter - Counter___

export class OldCounter extends Component {
    state = {
        counterA: 0,
        counterB: 0,
    };

    handleCounterAIncrement = () => {
        this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
    };

    handleCounterBIncrement = () => {
        this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
    };

    componentDidMount() {
        const { counterA, counterB } = this.state;
        const totalClicks = counterA + counterB;

        // console.log(`componentDidMount Всего кликнули ${totalClicks} раз`); //!

        document.title = `Всего кликнули ${totalClicks} раз`;
        // document.title = ``;

    }

    componentDidUpdate(prevProps, prevState) {
        const { counterA, counterB } = this.state;

        if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
            const totalClicks = counterA + counterB;

            document.title = `Всего кликнули ${totalClicks} раз`;

            // console.log(`componentDidUpdate Всего кликнули ${totalClicks} раз`); //!
        }
    }

    render() {
        return (
            <>
                <button
                    // className={styles.btn}
                    type="button"
                    onClick={this.handleCounterAIncrement}
                >
                    Кликнули counterA {this.state.counterA} раз
                </button>

                <button
                    // className={styles.btn}
                    type="button"
                    onClick={this.handleCounterBIncrement}
                >
                    Кликнули counterB {this.state.counterB} раз
                </button>
            </>
        );
    }
}


/*
* -
! ========================================
 */

//! ___Hook-Counter___

export function Counter() {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleCounterAIncrement = () => {
        setCounterA(state => state + 1);
    };

    const handleCounterBIncrement = () => {
        setCounterB(state => state + 1);
    };

    useEffect(() => {
        const totalClicks = counterA + counterB;
        // console.log("document.title ДО: ", document.title); //!
        document.title = `Всего кликнули ${totalClicks} раз`;
        // console.log("document.title ПОСЛЕ: ", document.title); //!
    }, [counterA, counterB]);

    return (
        <>
            <button
                // className={styles.btn}
                type="button"
                onClick={handleCounterAIncrement}
            >
                Кликнули counterA {counterA} раз
            </button>

            <button
                // className={styles.btn}
                type="button"
                onClick={handleCounterBIncrement}
            >
                Кликнули counterB {counterB} раз
            </button>
        </>
    );
}

/*
* -
! ========================================
 */

//! ___SignupForm___

export function SignupForm() {
    //! 1 (useState)
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    //! 2 (lazy state initialization)
    // const [email, setEmail] = useState(
    //     () => JSON.parse(localStorage.getItem("email")) ?? "",
    // );
    // const [password, setPassword] = useState(() => {
    //     console.log("localStorage.getItem  password");
    //     return JSON.parse(localStorage.getItem("password")) ?? "";
    // });

    //! 3 (import useLocalStorage from '../hooks/useLocalStorage';)
    const [email, setEmail] = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');



    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }

    };

    useEffect(() => {
        // console.log("email useEffect"); //!
        localStorage.setItem("email", JSON.stringify(email));
    }, [email]);

    useEffect(() => {
        // console.log("password useEffect"); //!
        localStorage.setItem("password", JSON.stringify(password));
    }, [password]);

    return (
        <form
            // className={styles.form}
            autoComplete="on"
        >
            <label
            // className={styles.label}
            >
                <span>Почта</span>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
            </label>

            <label
            // className={styles.label}
            >
                <span>Пароль</span>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                />
            </label>

            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}
/*
* - 
! ========================================
 */

//! ___useEffect и пропуск первого рендера___

const styles = {
    code: {
        display: 'inline-flex',
        padding: 4,
        borderRadius: 4,
        backgroundColor: '#ddd',
        fontWeight: 700,
    },
};

export function SkipEffectOnFirstRender() {
    const [count, setCount] = useState(0);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            // console.log('isFirstRender: ', isFirstRender); //!
            isFirstRender.current = false;
            return;
        }

        // console.log(`Выполняется useEffect - ${Date.now()}`); //!
    });

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>{count}</button>
            <p>
                <code style={styles.code}>useEffect</code> этого компонента не
                выполняется на первом рендере
            </p>
        </div>
    );
}

/*
* -
! ========================================
 */

//! ___useMemo и 100 друзей___

// import { useState, useMemo } from 'react';

const initalFriends = [
    'Kolby Thompson',
    'Jean Santiago',
    'Ireland Bautista',
    'Thaddeus Campos',
    'Drew Nixon',
    'Van Garrett',
    'Brycen Montoya',
    'Maurice Cordova',
    'Joseph Harris',
    'Kadyn Robinson',
    'Shayna Olson',
    'Hector Cole',
    'Chandler Heath',
    'Eileen Whitaker',
    'Rene Preston',
    'Terrence Lee',
    'Angel Powell',
    'Haiden Pollard',
    'Nina Gentry',
    'Keyla Rich',
    'Darren Ali',
    'Angeline Snow',
    'Jazmyn Henry',
    'Amiyah Donaldson',
    'Craig Lutz',
    'Heath Hobbs',
    'Marley Castillo',
    'Milton Mata',
    'Helena Ponce',
    'Jasmin Manning',
    'Jayla Stephens',
    'Anahi Gomez',
    'Caylee Holmes',
    'Jeffrey Quinn',
    'Travis George',
    'Kamari Church',
    'Makaila Harrell',
    'Adam Duke',
    'Mckinley Fitzpatrick',
    'Mya Spencer',
    'Heidi Morton',
    'Nyasia Guzman',
    'Chaim Lowe',
    'Yaretzi Moore',
    'Andrea Mcmillan',
    'Joe Williams',
    'Jaden Thornton',
    'Noemi Hansen',
    'Adolfo Schneider',
    'Yadira Webb',
    'Nathanial Powers',
    'Claire Ramsey',
    'Yadiel Rodgers',
    'Casey Joyce',
    'Abraham Vance',
    'Viviana Clay',
    'Maxwell Calhoun',
    'Sage Rowe',
    'Emerson Beard',
    'Carla Ward',
    'Deacon Larsen',
    'Clay Nash',
    'Ruby Stevenson',
    'Aracely Rojas',
    'Jay Shea',
    'Kameron Sherman',
    'Tanner Avila',
    'Luis Shannon',
    'Kristen Franklin',
    'Rachael Ellison',
    'Matthew Ball',
    'Kaylee Sweeney',
    'Kassidy Madden',
    'Jovanny Brock',
    'Nikolas Davies',
    'Braiden Poole',
    'Carleigh Hodge',
    'Sonia Hester',
    'Cash Winters',
    'Elsie Melton',
    'Roberto Camacho',
    'Nick Chavez',
    'Efrain Ballard',
    'Derick Archer',
    'Gabriel Horton',
    'Hadley Barr',
    'Anabel Underwood',
    'Leila Kerr',
    'Ross Carney',
    'Amber Rowe',
    'Nathen Franklin',
    'Oliver Harvey',
    'Gavin Torres',
    'Scott Lambert',
    'Zane Hardy',
    'Cody Waller',
    'Angelique Shannon',
    'Nathaly Mckenzie',
    'Kaylee Pittman',
    'Gracelyn Suarez',
];

export function Friends() {
    const [count, setCount] = useState(0);
    const [friends] = useState(initalFriends);
    const [filter, setFilter] = useState('');


    //? без useMemo -1
    // const visibleFriends = friends.filter(friend =>
    //     friend.toLowerCase().includes(filter),
    // );

    // const s = (() => { return 5; })(); //????

    //? без useMemo -2 
    const visibleFriends = (() => {
        console.log('Фильтруем друзей ' + Date.now());
        return friends.filter(friend => friend.toLowerCase().includes(filter));
    })();


    //* useMemo 
    // const visibleFriends = useMemo(() => {
    //     console.log('Фильтруем друзей ' + Date.now());
    //     return friends.filter(friend => friend.toLowerCase().includes(filter));
    // }, [filter, friends]);

    //! useEffect - НЕ РАБОТАЕТ!!!
    // const visibleFriends = useEffect(() => {
    //     console.log('Фильтруем друзей ' + Date.now());
    //     return friends.filter(friend => friend.toLowerCase().includes(filter));
    // }, [filter, friends]);

    return (
        <div>
            <button
                onClick={() => setCount(c => c + 1)}
            >
                {count}
            </button>
            <hr />
            <input
                value={filter}
                onChange={e => setFilter(e.target.value)}

            />
            <ul>
                {visibleFriends.map((friend, idx) => (
                    <li
                        key={idx}
                    >
                        {friend}
                    </li>
                ))}
            </ul>
        </div>
    );
}

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


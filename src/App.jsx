import {
    Children,
    cloneElement,
    useEffect,
    useReducer,
    useRef,
    useState,
} from "react";
import "./App.css";
import { useUserContext } from "./providers/UserContext";
import FeedbackForm from "./components/FeedbackForm";

// useReducer

const reducer = (state, action) => {
    if (action.type === "buy_ingredients") {
        return { money: state.money - 10 };
    } else if (action.type === "sell_a_meal") {
        return { money: state.money + 10 };
    } else if (action.type === "celebrity_visit") {
        return { money: state.money + 5000 };
    }
    return state;
};

function App() {
    // const [name, setName] = useState("");
    const [score, setScore] = useState(10);
    const [comment, setComment] = useState("");

    // goal app
    const [goals, setGoals] = useState([]);

    // useEffect
    const [toggle, setToggle] = useState(false);

    // useEffect(() => {
    //     document.title = toggle
    //         ? "Welcome to Little Lemon"
    //         : "using the useEffect hook";
    // }, [toggle]);

    function clickHandler() {
        setToggle(!toggle);
    }

    function addGoal(goal) {
        console.log("added goal");
        setGoals([...goals, goal]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form Submitted");
    };

    const handleForm = (e) => {
        e.preventDefault();
        console.log(score, "DD");
        if (Number(score) <= 5 && comment.length <= 10) {
            alert(
                "Please providea comment explaining why the experience is bad."
            );
            return;
        }

        console.log("Form Submitted!");
        setComment("");
        setScore(10);
    };

    // Rule of hook and fetch
    // const [user, setUser] = useState([]);
    // const fetchData = () => {
    //     fetch("https://randomuser.me/api/?results=1")
    //         .then((response) => response.json())
    //         .then((data) => setUser(data));

    //         console.log(user.results)
    // };

    // useEffect(() => fetchData(), []);

    // useReducer
    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);

    // useRef
    const formInputRef = useRef(null);

    const focusInput = () => {
        formInputRef.current.focus();
    };

    const [name, setName] = useState("");
    const renderCount = useRef(1);
    const prevName = useRef("");
    //when u use useRef, u are storing like {current: 1}

    // useEffect(() => {
    //     // renderCount.current++;
    //     prevName.current = name;
    // }, [name]);

    // testing form
    const handleTestingSubmit = ({score, comment}) => {
        console.log("sdsd", score, comment)
    };

    return (
        // controlled form component
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <fieldset>
        //             <div>
        //                 <label htmlFor="name">Name: </label>
        //                 <input
        //                     type="text"
        //                     name="name"
        //                     id="name"
        //                     placeholder="Name"
        //                     value={name}
        //                     onChange={(e) => setName(e.target.value)}
        //                 />
        //             </div>
        //             <button disabled={!name} type="submit">Submit</button>
        //         </fieldset>
        //     </form>
        // </div>

        // Feedback
        // <div>
        //     <form onSubmit={handleForm}>
        //         <fieldset>
        //             <h2>Feedback Form</h2>
        //             <div>
        //                 <div>
        //                     <label htmlFor="score">Score: {score}</label>
        //                 </div>
        //                 <input
        //                     type="range"
        //                     name="score"
        //                     id="score"
        //                     min="0"
        //                     max="10"
        //                     value={score}
        //                     onChange={(e) => setScore(e.target.value)}
        //                 />
        //             </div>
        //             <div>
        //                 <label htmlFor="comment">Comment: {comment}</label>
        //                 <textarea
        //                     name="comment"
        //                     cols="30"
        //                     rows="10"
        //                     value={comment}
        //                     onChange={(e) => setComment(e.target.value)}
        //                 ></textarea>
        //             </div>
        //             <button type="submit">Submit</button>
        //         </fieldset>
        //     </form>
        // </div>

        // USE CONTEXT
        // BLOG APP
        // <div>
        //     <Header />
        //     <Page />
        // </div>

        // Goals App
        // <>
        //     <GoalForm onAdd={addGoal} />
        //     <ListOfGoals goals={goals} />
        // </>

        // useEffect Hook
        // <>
        //     <h1>Using the useEffect hook</h1>
        //     <button onClick={clickHandler}>Toggle message</button>
        //     {toggle && <h2>Welcome to Little Lemon</h2>}
        // </>
        // <>
        //     {Object.keys(user).length > 0 ? (
        //         <div>
        //             <h1>Data Returned</h1>
        //             <h2>First Name: {user.results[0].name.first}</h2>
        //             <h2>Last Name: {user.results[0].name.last}</h2>
        //         </div>
        //     ) : (
        //         <h1>Data pending...</h1>
        //     )}
        // </>

        //useReducer
        // <>
        //     <h1>Wallet: {state.money}</h1>
        //     <div>
        //         <button onClick={() => dispatch({ type: "buy_ingredients" })}>
        //             Shopping for veggies!
        //         </button>
        //         <button onClick={() => dispatch({ type: "sell_a_meal" })}>
        //             Serve a meal to the customer
        //         </button>
        //         <button onClick={() => dispatch({ type: "celebrity_visit" })}>
        //             Celebrity Visit
        //         </button>
        //     </div>
        // </>

        // useRef
        // <>
        //     <h1>Using useRef to access the underlying DOM</h1>
        //     <input ref={formInputRef} type="text" />
        //     <button onClick={focusInput}>Focus Input</button>
        // </>
        // <>
        //     <input
        //         type="text"
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //     />
        //     <div>My name is {name} and it used to be {prevName.current}</div>
        //     <div>I rendered {renderCount.current} times</div>
        // </>

        // Component Composition
        // <>
        //     <header>Little Lemon Restaurant</header>
        //     <Alert>
        //         <h4>Delete Account</h4>
        //         <p>
        //             Are you sure you want to procced? You will miss all your
        //             delicious recipes!
        //         </p>
        //         <DeleteButton />
        //     </Alert>
        // </>

        // React.Children
        // <>
        //     <Row spacing={32}>
        //         <p>Pizza Margarita</p>
        //         <p>2</p>
        //         <p>30$</p>
        //         <p>18:30</p>
        //         <p>John</p>
        //     </Row>
        // </>

        // Spread Operator
        // <div>
        //     <header>Little Lemon Restaurant</header>
        //     <ButtonS type="primary" onClick={() => alert("Signing up!")}>
        //         Sign up
        //     </ButtonS>
        //     <LoginButton type="secondary" onClick={() => alert("Signing up, BABY!")}>
        //         Login
        //     </LoginButton>
        // </div>

        // Testing Library
        // <div>
        //     <a href="https://littlelemon.com">
        //         {/* <h1>Little Lemon Restaurant</h1> */}
        //         <h1 className="notShow">Little Lemon Restaurant</h1>
        //     </a>
        // </div>

        <>
            <FeedbackForm onFormSubmit={handleTestingSubmit} />
        </>
    );
}

const LoggedInUser = () => {
    const { user } = useUserContext();
    return (
        <>
            <p>
                Hello <span>{user.name}</span>
            </p>
        </>
    );
};

const Header = () => {
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    );
};

const Page = () => {
    const { user } = useUserContext();
    console.log(user, "dd");
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                nobis quibusdam praesentium tempore, possimus incidunt quisquam
                accusamus dicta repellendus provident nisi, maiores aspernatur
                neque magnam consequuntur tenetur iste laboriosam vero.
            </p>
            <h4>Written by {user.name}</h4>
        </>
    );
};

// Goal App
function GoalForm(props) {
    const [formData, setFormData] = useState({ goal: "", by: "" });

    function changeHandler(e) {
        console.table(e.target.name, e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);
        props.onAdd(formData);
        setFormData({ goal: "", by: "" });
    }

    return (
        <>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="goal"
                    placeholder="Goal"
                    value={formData.goal}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="by"
                    placeholder="By..."
                    value={formData.by}
                    onChange={changeHandler}
                />
                <button onClick={submitHandler}>Submit Goal</button>
            </form>
        </>
    );
}

function ListOfGoals({ goals }) {
    console.table(goals);
    return (
        <>
            {goals.map((task, index) => (
                <p key={index}>
                    The goal is to {task.goal} by {task.by}.
                </p>
            ))}
        </>
    );
}

// Component Composition
const Button = ({ children, backgroundColor }) => {
    return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
    return (
        <>
            <div />
            <div>{children}</div>
        </>
    );
};

const DeleteButton = () => {
    return <Button backgroundColor="red">Delete</Button>;
};

// React.Children.amp and React.cloneElement()

const Row = ({ children, spacing }) => {
    const childStyle = {
        marginLeft: `${spacing}px`,
    };
    return (
        <div style={{ display: "flex" }}>
            {Children.map(children, (child, index) => {
                // return child;
                return cloneElement(child, {
                    style: {
                        ...child.props.style,
                        // ...childStyle
                        ...(index > 0 ? childStyle : {}),
                    },
                });
            })}
            {/* {children} */}
        </div>
    );
};

// SpreadOperator
const ButtonS = ({ type, children, ...buttonProps }) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    );
};

// beaware that when using spread operator, order matters
const LoginButton = ({ type, children, ...buttonProps }) => {
    console.log(buttonProps);
    return (
        <ButtonS
            type="secondary"
            {...buttonProps} //here
            onClick={() => alert("Logging in!")} //here
        >
            {children}
        </ButtonS>
    );
};

export default App;

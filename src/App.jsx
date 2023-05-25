import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [score, setScore] = useState(10);
    const [comment, setComment] = useState("");

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
        <div>
            <form onSubmit={handleForm}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div>
                        <div>
                            <label htmlFor="score">Score: {score}</label>
                        </div>
                        <input
                            type="range"
                            name="score"
                            id="score"
                            min="0"
                            max="10"
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="comment">Comment: {comment}</label>
                        <textarea
                            name="comment"
                            cols="30"
                            rows="10"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default App;

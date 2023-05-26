import React, { useState } from "react";

function FeedbackForm({ onFormSubmit }) {
    const [score, setScore] = useState(10);
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceHolder = isDisabled
        ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
        : "Optional feedback";

    function submitHandler(e) {
        e.preventDefault();
        onFormSubmit({score, comment});
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
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
                        <br />
                        <textarea
                            name="comment"
                            cols="30"
                            rows="10"
                            value={comment}
                            placeholder={textAreaPlaceHolder}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" disabled={isDisabled}>
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default FeedbackForm;

import React from "react";
import "./TodoApp.css";
const TodoApp = () => {
	return (
		<div className="Main">
			<div className="todoapp">
				<div className="new-note-area">
					<textarea
						name="newnite"
						id=""
						cols="40"
						rows="10"
						placeholder="Write new note here.."
					></textarea>
				</div>
				<div className="submit-area">
					<button className="submitbtn">Save this note</button>
				</div>
			</div>
			<div className="saved-notes">hey</div>
		</div>
	);
};

export default TodoApp;

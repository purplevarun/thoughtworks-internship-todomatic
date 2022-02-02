import React, { useState } from "react";
import "./TodoApp.css";
import "./bootstrap.min.css";
const TodoApp = () => {
	const [todoAppWidth, SetTodoAppWidth] = useState("100%");
	const [savedNotesWidth, SetSavedNotesWidth] = useState("0");
	const changeDimensions = (newTodoAppWidth, newSavedNotesWidth) => {
		SetTodoAppWidth(newTodoAppWidth);
		SetSavedNotesWidth(newSavedNotesWidth);
	};
	return (
		<div className="Main">
			<div className="todoapp" style={{ width: todoAppWidth }}>
				<div className="new-note-area">
					<textarea
						name="newnite"
						id=""
						cols="40"
						rows="10"
						placeholder="Write new note here.."
					></textarea>
				</div>
				<div style={{ width: "100%" }}></div>
				<div className="submit-area">
					<button
						className="btn btn-lg btn-primary"
						onClick={() => changeDimensions("70%", "30%")}
					>
						Save this note
					</button>
				</div>
			</div>
			<div
				className="saved-notes"
				style={{ width: savedNotesWidth }}
			></div>
		</div>
	);
};

export default TodoApp;

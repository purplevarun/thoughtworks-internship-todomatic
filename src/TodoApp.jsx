import React, { useEffect, useState } from "react";
import "./TodoApp.css";
import "./bootstrap.min.css";
const TodoApp = () => {
	const [newNote, SetNewNote] = useState("");
	const [todoAppWidth, SetTodoAppWidth] = useState("100%");
	const [savedNotesWidth, SetSavedNotesWidth] = useState("0");
	const [allNotes, SetAllNotes] = useState([]);
	const changeDimensions = (newTodoAppWidth, newSavedNotesWidth) => {
		if (allNotes.length > 0) {
			SetTodoAppWidth(newTodoAppWidth);
			SetSavedNotesWidth(newSavedNotesWidth);
		}
	};
	const saveTheNewNote = () => {
		if (newNote.length > 0) SetAllNotes([...allNotes, newNote]);
	};
	useEffect(() => {
		changeDimensions("70%", "20%");
	});
	return (
		<div className="Main">
			<div className="todoappContainer" style={{ width: todoAppWidth }}>
				<div className="pagetitle"></div>
				<div className="todoapp">
					<div className="new-note-area">
						<textarea
							name="newnite"
							id=""
							cols="40"
							rows="10"
							placeholder="Write new note here.."
							onChange={(e) => SetNewNote(e.target.value)}
						></textarea>
					</div>
					<div style={{ width: "100%" }}></div>
					<div className="submit-area">
						<button
							className="btn btn-lg btn-primary"
							onClick={() => {
								saveTheNewNote();
							}}
						>
							Save this note
						</button>
					</div>
				</div>
			</div>
			<div className="saved-notes" style={{ width: savedNotesWidth }}>
				<h1>Your Saved Notes :</h1>
				{allNotes.map((thisNote, i) => {
					return (
						<div key={i} className="one-note">
							{thisNote}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TodoApp;

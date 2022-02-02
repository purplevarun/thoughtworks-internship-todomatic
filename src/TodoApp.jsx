import React, { useEffect, useState, useRef } from "react";
import "./TodoApp.css";
import "./bootstrap.min.css";
const TodoApp = () => {
	const NOTEAREA = useRef(null);
	const [newNote, SetNewNote] = useState("");
	const [todoAppWidth, SetTodoAppWidth] = useState("100%");
	const [savedNotesWidth, SetSavedNotesWidth] = useState("0");
	const [allNotes, SetAllNotes] = useState([]);
	const [savedNotesDisplay, SetSavedNotesDisplay] = useState("none");
	const changeDimensions = (newTodoAppWidth, newSavedNotesWidth) => {
		SetTodoAppWidth(newTodoAppWidth);
		SetSavedNotesWidth(newSavedNotesWidth);
	};
	const saveTheNewNote = () => {
		if (newNote.length > 0) SetAllNotes([...allNotes, newNote]);
		NOTEAREA.current.value = "";
	};
	useEffect(() => {
		if (allNotes.length > 0) {
			changeDimensions("70%", "20%");
			SetSavedNotesDisplay("flex");
		}
	}, [allNotes.length]);
	return (
		<div className="Main">
			<div className="todoappContainer" style={{ width: todoAppWidth }}>
				<div className="pagetitle">
					<h1>TodoMatic</h1>
				</div>
				<div className="todoapp">
					<div className="new-note-area">
						<textarea
							ref={NOTEAREA}
							name="newnote"
							id="note-area"
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
			<div
				className="saved-notes"
				style={{ width: savedNotesWidth, display: savedNotesDisplay }}
			>
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

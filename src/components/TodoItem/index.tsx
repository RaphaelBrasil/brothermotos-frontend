import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMinus,
	faGear,
	faFloppyDisk
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface Task {
	id: number;
	text: string;
	completed: boolean;
	user: string;
}

interface TodoItemProps {
	task: Task;
	deleteTask: (id: number) => void;
	editTask: (id: number, newText: string) => void;
	toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
	task,
	deleteTask,
	editTask,
	toggleCompleted
}) => {
	const [clicked, setClicked] = useState(false);
	const [editing, setEditing] = useState(false);
	const [editedText, setEditedText] = useState(task.text);

	function handleTextClick() {
		setClicked(!clicked);
		toggleCompleted(task.id);
	}

	function handleEditClick() {
		setEditing(true);
	}

	function handleSaveClick() {
		setEditing(false);
		editTask(task.id, editedText);
	}

	return (
		<S.Container className="todo-item" $clicked={clicked}>
			{editing ? (
				<S.NormalInput
					type="text"
					value={editedText}
					onChange={(e) => setEditedText(e.target.value)}
				/>
			) : (
				<S.Item $clicked={clicked} onClick={handleTextClick}>
					{task.text}
				</S.Item>
			)}
			<S.IconWrapper>
				<div style={{ fontSize: "1rem" }}>
					<FontAwesomeIcon
						onClick={editing ? handleSaveClick : handleEditClick}
						icon={editing ? faFloppyDisk : faGear}
						size="xl"
						style={{
							color: editing
								? "#095256"
								: clicked
								? "#a8a8a8"
								: "#49b4bb",
							cursor: "pointer"
						}}
					/>
				</div>
				<div style={{ fontSize: "1rem" }}>
					<FontAwesomeIcon
						onClick={() => deleteTask(task.id)}
						icon={faMinus}
						size="2xl"
						style={{
							color: clicked ? "#a8a8a8" : "#49b4bb",
							cursor: "pointer"
						}}
					/>
				</div>
			</S.IconWrapper>
		</S.Container>
	);
};

export default TodoItem;

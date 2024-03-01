import React, { useState } from "react";
import {
	faMinus,
	faGear,
	faFloppyDisk
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import IconPopup from "../IconPopup";

interface Task {
	_id: any;
	date: number;
	text: string;
	completed: boolean;
	user: string;
}

interface TodoItemProps {
	task: Task;
	deleteTask: (_id: number) => void;
	editTask: (_id: number, newText: string) => void;
	toggleCompleted: (_id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
	task,
	deleteTask,
	editTask,
	toggleCompleted
}) => {
	const [completed, setCompleted] = useState(task.completed);
	const [editing, setEditing] = useState(false);
	const [editedText, setEditedText] = useState(task.text);

	function handleTextClick() {
		setCompleted(!completed);
		toggleCompleted(task._id);
	}

	function handleEditClick() {
		setEditing(true);
	}

	function handleSaveClick() {
		setEditing(false);
		editTask(task._id, editedText);
	}

	return (
		<S.Container className="todo-item" $completed={completed}>
			{editing ? (
				<S.NormalInput
					type="text"
					value={editedText}
					onChange={(e) => setEditedText(e.target.value)}
				/>
			) : (
				<S.Item $completed={completed} onClick={handleTextClick}>
					{task.text}
				</S.Item>
			)}
			<S.IconWrapper>
				<div style={{ fontSize: "1rem" }}>
					<IconPopup
						popupText="Editar"
						onClick={editing ? handleSaveClick : handleEditClick}
						icon={editing ? faFloppyDisk : faGear}
						size="xl"
						style={{
							color: editing
								? "#095256"
								: completed
								? "#a8a8a8"
								: "#49b4bb",
							cursor: "pointer"
						}}
					/>
				</div>
				<div style={{ fontSize: "1rem" }}>
					<IconPopup
						popupText="Excluir"
						onClick={() => deleteTask(task._id)}
						icon={faMinus}
						size="2xl"
						style={{
							color: completed ? "#a8a8a8" : "#49b4bb",
							cursor: "pointer"
						}}
					/>
				</div>
			</S.IconWrapper>
		</S.Container>
	);
};

export default TodoItem;

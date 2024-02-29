import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faGear } from "@fortawesome/free-solid-svg-icons";
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
	editTask: (id: number) => void;
	toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
	task,
	deleteTask,
	editTask,
	toggleCompleted
}) => {
	const [clicked, setClicked] = useState(false);

	function handleTextClick() {
		console.log("Clicked");
		setClicked(!clicked);
		toggleCompleted(task.id);
	}

	return (
		<S.Container className="todo-item" clicked={clicked}>
			<S.Item clicked={clicked} onClick={handleTextClick}>
				{task.text}
			</S.Item>
			<S.IconWrapper>
				<FontAwesomeIcon
					onClick={() => deleteTask(task.id)}
					icon={faMinus}
					size="2xl"
					style={{
						color: clicked ? "#a8a8a8" : "#49b4bb",
						cursor: "pointer"
					}}
				/>
				<FontAwesomeIcon
					onClick={() => editTask(task.id)}
					icon={faGear}
					size="xl"
					style={{
						color: clicked ? "#a8a8a8" : "#49b4bb",
						cursor: "pointer"
					}}
				/>
			</S.IconWrapper>
		</S.Container>
	);
};

export default TodoItem;

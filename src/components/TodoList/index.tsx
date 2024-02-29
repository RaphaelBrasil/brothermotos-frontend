import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface Task {
	id: number;
	text: string;
	completed: boolean;
	user: string;
}

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [text, setText] = useState<string>("");
	const [userEmail, setUserEmail] = useState<string>("");

	useEffect(() => {
		// Recuperando informações do usuário do LocalStorage
		const userString = localStorage.getItem("userEmail");
		if (userString) {
			setUserEmail(JSON.parse(userString));
			console.log("Informações do usuário:", userEmail);
		}
	}, [userEmail]);

	function addTask(taskText: string) {
		if (taskText.trim() !== "") {
			const newTask: Task = {
				id: Date.now(),
				text: taskText,
				completed: false,
				user: userEmail
			};
			setTasks((prevTasks) => [...prevTasks, newTask]);
			setText("");
		}
	}

	function deleteTask(id: number) {
		setTasks(tasks.filter((task) => task.id !== id));
	}

	function editTask(id: number, newText: string) {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, text: newText } : task
			)
		);
	}

	function toggleCompleted(id: number) {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return { ...task, completed: !task.completed };
				} else {
					return task;
				}
			})
		);
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			addTask(text);
		}
	}
	return (
		<S.Container className="todo-list">
			<S.ContainerInput>
				<S.NormalInput
					value={text}
					placeholder="Adicione uma tarefa:"
					onChange={(e) => setText(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<FontAwesomeIcon
					onClick={() => addTask(text)}
					size="2xl"
					icon={faPlus}
					style={{ color: "#49b4bb", cursor: "pointer" }}
				/>
			</S.ContainerInput>
			<S.ContainerItens>
				{tasks.map((task) => (
					<TodoItem
						key={task.id}
						task={task}
						deleteTask={deleteTask}
						editTask={editTask}
						toggleCompleted={toggleCompleted}
					/>
				))}
			</S.ContainerItens>
		</S.Container>
	);
};

export default TodoList;

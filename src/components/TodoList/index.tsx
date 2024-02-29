import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import axios from "axios";

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
	const baseURL = "http://localhost:6060";

	useEffect(() => {
		// Recuperando informações do usuário do LocalStorage
		const userString = localStorage.getItem("userEmail");
		if (userString) {
			setUserEmail(JSON.parse(userString));
			console.log("Informações do usuário:", userString);
		}
	}, []);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`${baseURL}/tasks/${userEmail}`
				);
				if (Array.isArray(response.data)) {
					setTasks(response.data);
				} else {
					console.error(
						"A resposta recebida não é um array: ",
						response.data
					);
					setTasks([]);
				}
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	}, []);

	async function addOrModifyTasksData(task: Task) {
		try {
			const response = await axios.post(`${baseURL}/tasks`, task);
			console.log("Enviado ao BD");
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	async function deleteTaskData(task: Task) {
		try {
			const response = await axios.delete(`${baseURL}/tasks/${task.id}`);
			console.log("Enviado ao BD");
			console.log(response);
		} catch (error) {
			console.error("Error deleting task data:", error);
		}
	}

	function addTask(taskText: string) {
		try {
			if (taskText.trim() !== "") {
				const newTask: Task = {
					id: Date.now(),
					text: taskText,
					completed: false,
					user: userEmail
				};
				setTasks((prevTasks) => [...prevTasks, newTask]);
				setText("");
				addOrModifyTasksData(newTask);
			}
		} catch (error) {
			console.log("Não foi possivel adicionar tarefa ao banco de dados");
		}
	}

	function deleteTask(id: number) {
		setTasks(tasks.filter((task) => task.id !== id));
		const taskToDelete = tasks.find((task) => task.id === id);
		if (taskToDelete) {
			deleteTaskData(taskToDelete);
		}
	}

	function editTask(id: number, newText: string) {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, text: newText } : task
			)
		);

		const taskToUpdate = tasks.find((task) => task.id === id);
		if (taskToUpdate) {
			addOrModifyTasksData({
				id: taskToUpdate.id,
				text: newText,
				completed: taskToUpdate.completed,
				user: taskToUpdate.user
			});
		}
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

		const taskToUpdate = tasks.find((task) => task.id === id);
		if (taskToUpdate) {
			addOrModifyTasksData({
				id: taskToUpdate.id,
				text: taskToUpdate.text,
				completed: !taskToUpdate.completed,
				user: taskToUpdate.user
			});
		}
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

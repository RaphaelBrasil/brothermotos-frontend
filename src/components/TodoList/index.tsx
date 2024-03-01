import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import IconPopup from "../IconPopup";
import {
	faPlus,
	faFilter,
	faArrowUpWideShort,
	faArrowUpShortWide,
	faTrash,
	faEnvelope,
	faEnvelopeCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import axios from "axios";

interface Task {
	_id: any;
	date: number;
	text: string;
	completed: boolean;
	user: string;
}

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [text, setText] = useState<string>("");
	const [textFilter, setTextFilter] = useState<string>("");
	const [mostrarTudo, setMostrarTudo] = useState<boolean>(true);
	const [sortDescending, setSortDescending] = useState<boolean>(true);
	const [habilitaEmail, setHabilitaEmail] = useState<boolean>(true);
	const [userEmail, setUserEmail] = useState<string>("");
	const baseURL = "http://localhost:6060";

	useEffect(() => {
		async function fetchData(userEmail: Task["user"]) {
			try {
				console.log(`${baseURL}/tasks/${userEmail}`);
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

		// Recuperando informações do usuário do LocalStorage
		const userString = localStorage.getItem("userEmail");
		if (userString) {
			const userEmail = JSON.parse(userString);
			setUserEmail(userEmail);
			fetchData(userEmail);
			console.log("Informações do usuário:", userString);
		}
	}, []);

	async function sendEmail(task: Task) {
		try {
			if (habilitaEmail) {
				const response = await axios.post(`${baseURL}/email`, task);
				console.log("Enviado ao BD Email");
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function addOrModifyTasksData(task: Task) {
		try {
			const response = await axios.post(`${baseURL}/tasks`, task);
			console.log("Enviado ao BD Adição ou alteração");
			console.log(response);
			sendEmail(task);
		} catch (error) {
			console.log(error);
		}
	}

	async function deleteTaskData(task: Task) {
		try {
			const response = await axios.delete(`${baseURL}/tasks/${task._id}`);
			console.log("Enviado ao BD deleção");
			console.log(response);
			sendEmail(task);
		} catch (error) {
			console.error("Error deleting task data:", error);
		}
	}

	function addTask(taskText: string) {
		try {
			if (taskText.trim() !== "") {
				const newTask: Task = {
					_id: Date.now(),
					date: Date.now(),
					text: taskText,
					completed: false,
					user: userEmail
				};
				setTasks((tasks) => [...tasks, newTask]);
				setText("");
				addOrModifyTasksData(newTask);
			}
		} catch (error) {
			console.log("Não foi possivel adicionar tarefa ao banco de dados");
		}
	}

	async function deleteTask(_id: number) {
		const confirmDeletion = window.confirm(
			"Are you sure you want to delete this task?"
		);

		if (confirmDeletion) {
			setTasks(tasks.filter((task) => task._id !== _id));

			const taskToDelete = tasks.find((task) => task._id === _id);
			if (taskToDelete) {
				try {
					deleteTaskData(taskToDelete);
					console.log("Task deleted successfully:");
				} catch (error) {
					console.error("Error deleting task data:", error);
				}
			}
		}
	}

	async function deleteAllTasksCompleted() {
		const confirmDeletion = window.confirm(
			"Tem certeza que você quer deletar todas as tarefas concluidas? Não existe retorno."
		);

		if (confirmDeletion) {
			const tasksToDelete = tasks.filter((task) => task.completed);

			setTasks(tasks.filter((task) => !task.completed));

			if (tasksToDelete) {
				tasksToDelete.forEach(async (taskToDelete) => {
					try {
						await deleteTaskData(taskToDelete);
						console.log("Task deleted successfully:", taskToDelete);
					} catch (error) {
						console.error("Error deleting task data:", error);
					}
				});
			}
		}
	}

	function editTask(_id: number, newText: string) {
		setTasks((tasks) =>
			tasks.map((task) =>
				task._id === _id ? { ...task, text: newText } : task
			)
		);

		const taskToUpdate = tasks.find((task) => task._id === _id);
		if (taskToUpdate) {
			addOrModifyTasksData({
				_id: taskToUpdate._id,
				date: taskToUpdate.date,
				text: newText,
				completed: taskToUpdate.completed,
				user: taskToUpdate.user
			});
		}
	}

	function toggleCompleted(_id: number) {
		setTasks((tasks) =>
			tasks.map((task) =>
				task._id === _id
					? { ...task, completed: !task.completed }
					: task
			)
		);

		const taskToUpdate = tasks.find((task) => task._id === _id);
		if (taskToUpdate) {
			addOrModifyTasksData({
				_id: taskToUpdate._id,
				date: taskToUpdate.date,
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

	const toggleSortOrder = () => {
		setSortDescending(!sortDescending);
	};

	const filteredTasks = tasks
		.filter((task) => {
			return mostrarTudo || !task.completed;
		})
		.filter((task) =>
			task.text.toLowerCase().includes(textFilter.toLowerCase())
		)
		.sort((a, b) => {
			if (sortDescending) {
				return b.date - a.date;
			} else {
				return a.date - b.date;
			}
		});

	return (
		<S.Container className="todo-list">
			<S.ContainerInput>
				<S.NormalInput
					placeholder="Pesquise sua tarefa: "
					onChange={(e) => setTextFilter(e.target.value)}
				/>
				<S.IconWrapper>
					<IconPopup
						popupText="Mostrar Pendentes"
						onClick={() => setMostrarTudo(!mostrarTudo)}
						size="xl"
						icon={faFilter}
						style={{ color: "#095256", cursor: "pointer" }}
					/>
					<IconPopup
						popupText={
							sortDescending
								? "Ordem Decrescente"
								: "Ordem Crescente"
						}
						onClick={() => toggleSortOrder()}
						size="xl"
						icon={
							sortDescending
								? faArrowUpWideShort
								: faArrowUpShortWide
						}
						style={{ color: "#095256", cursor: "pointer" }}
					/>
					<IconPopup
						popupText="Remover Concluidas"
						onClick={() => deleteAllTasksCompleted()}
						size="xl"
						icon={faTrash}
						style={{ color: "#095256", cursor: "pointer" }}
					/>
					<IconPopup
						popupText={
							habilitaEmail
								? "Desabilitar envio de email"
								: "Habilitar envio de email"
						}
						onClick={() => setHabilitaEmail(!habilitaEmail)}
						size="xl"
						icon={
							habilitaEmail ? faEnvelopeCircleCheck : faEnvelope
						}
						style={{ color: "#095256", cursor: "pointer" }}
					/>
				</S.IconWrapper>
			</S.ContainerInput>
			<S.ContainerItens>
				{filteredTasks.map((task) => (
					<TodoItem
						key={task._id}
						task={task}
						deleteTask={deleteTask}
						editTask={editTask}
						toggleCompleted={toggleCompleted}
					/>
				))}
			</S.ContainerItens>
			<S.ContainerInput>
				<S.NormalInput
					value={text}
					placeholder="Adicione uma tarefa:"
					onChange={(e) => setText(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<IconPopup
					popupText="Adicionar"
					onClick={() => addTask(text)}
					size="xl"
					icon={faPlus}
					style={{ color: "#095256", cursor: "pointer" }}
				/>
			</S.ContainerInput>
		</S.Container>
	);
};

export default TodoList;

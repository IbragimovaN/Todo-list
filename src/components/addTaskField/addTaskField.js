import { useState } from "react";
import styles from "./addTaskField.module.css";
import { createTodo } from "../../api/api";

export const AddTaskField = ({ setRefreshTodos, refreshTodos }) => {
	const [isActiveAddTask, setIsActiveAddTask] = useState(false);
	const [textNewTask, setTextNewTask] = useState("");

	const onChangeInputNewTask = (target) => {
		setTextNewTask(target.value);
	};

	const onClickSend = (e) => {
		e.preventDefault();
		let newTodo = {
			title: textNewTask,
			completed: false,
		};
		createTodo(newTodo);
		setRefreshTodos(!refreshTodos);
	};
	const onClickAddTask = () => {
		setIsActiveAddTask(true);
	};
	const onClickCanselEnter = () => {
		setIsActiveAddTask(false);
	};
	return (
		<>
			{isActiveAddTask ? (
				<form onSubmit={(e) => onClickSend(e)} className={styles.inputAddTask}>
					<input
						type="text"
						onChange={({ target }) => onChangeInputNewTask(target)}
						placeholder="Введите новую задачу"
					/>
					<button type="submit">Отрправить</button>
					<button onClick={onClickCanselEnter}> Отмена</button>
				</form>
			) : (
				<button className={styles.btnAddTask} onClick={onClickAddTask}>
					добавить задачу
				</button>
			)}
		</>
	);
};

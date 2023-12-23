import { useState } from "react";
import styles from "./addTaskField.module.css";
import { createTodo } from "../../api/api";

export const AddTaskField = ({
	setRefreshTodos,
	refreshTodos,
	setIsActiveAddTask,
}) => {
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
		setIsActiveAddTask(false);
	};

	const onClickCanselEnter = () => {
		setIsActiveAddTask(false);
	};
	return (
		<form className={styles.formAddTask} onSubmit={(e) => onClickSend(e)}>
			<input
				type="text"
				onChange={({ target }) => onChangeInputNewTask(target)}
				placeholder="Введите новую задачу"
			/>
			<button type="submit">Отрправить</button>
			<button onClick={onClickCanselEnter}> Отмена</button>
		</form>
	);
};

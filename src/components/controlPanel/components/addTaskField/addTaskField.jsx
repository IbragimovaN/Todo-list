import { useState } from "react";
import styles from "./addTaskField.module.css";
import { createTodo } from "../../../../api/api";
import { useSelector, useDispatch } from "react-redux";

export const AddTaskField = ({ setIsActiveAddTask }) => {
	const [textNewTask, setTextNewTask] = useState("");

	const dispatch = useDispatch();

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
		dispatch({ type: "SET_REFRESH_TODOS" });
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

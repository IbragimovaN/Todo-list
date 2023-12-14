import styles from "./inputAddTask.module.css";
import { useState } from "react";
import { useRequestAdd } from "../../hooks";

export const InputAddTask = ({
	setRefreshTodos,
	refreshTodos,
	setIsActiveAddTask,
}) => {
	const [newText, setNewText] = useState("");
	const onChangeInputNewTask = (target) => {
		setNewText(target.value);
	};
	const { isCreating, requestAdd } = useRequestAdd(
		setRefreshTodos,
		refreshTodos,
	);
	const onClickSend = () => {
		console.log("запускаем add");
		requestAdd(newText);
		setNewText("");
	};
	const onClickCanselEnter = () => {
		setIsActiveAddTask(false);
	};
	return (
		<form onSubmit={(e) => onClickSend(e)} className={styles.inputAddTask}>
			<input
				type="text"
				onChange={({ target }) => onChangeInputNewTask(target)}
			/>
			<button type="submit" disabled={!newText}>
				Отрправить
			</button>
			<button onClick={onClickCanselEnter}>Отмена</button>
		</form>
	);
};

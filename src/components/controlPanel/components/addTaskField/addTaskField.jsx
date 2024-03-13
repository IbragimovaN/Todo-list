import styles from "./addTaskField.module.css";
import { createTodo } from "../../../../api/api";
import { useDispatch, useSelector } from "react-redux";

export const AddTaskField = ({ setIsActiveAddTask }) => {
	const textNewTask = useSelector(
		(state) => state.controlPanelState.textNewTask,
	);

	const dispatch = useDispatch();

	const onChangeInputNewTask = (target) => {
		dispatch({ type: "SET_TEXT_NEW_TASK", payload: target.value });
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

import { useState } from "react";
import styles from "./containerField.module.css";
import {
	useRequestAdd,
	useRequestDeleting,
	useRequestGet,
	useRequestUpdate,
} from "../../hooks";
import { TodoField } from "../todoField/todoField";
import { InputField } from "../inputField/inputField";

export const ContainerField = ({ id, value }) => {
	const [isOpenInput, setIsOpenInput] = useState(false);
	const newTaskText = "Новая задача";
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [text, setText] = useState(newTaskText);
	const [isArray, setIsArray] = useState(false);
	const [emptyField, setEmptyField] = useState(true);

	const { taskArray } = useRequestGet(refreshTodos, id, setText, newTaskText);
	const { isUpdating, requestUpdate, setIsUpdating } = useRequestUpdate(
		refreshTodos,
		setRefreshTodos,
		id,
	);
	const { isCreating, requestAdd } = useRequestAdd(
		setRefreshTodos,
		refreshTodos,
	);
	const { isDeleting, requestDeleting } = useRequestDeleting(
		refreshTodos,
		setRefreshTodos,
	);

	const onClickAddTask = () => {
		setText(taskArray.value);
		setIsOpenInput(true);
		setIsArray(true);
	};

	const onClickDeleteTask = () => {
		requestDeleting(id);
	};

	const onChangeInput = (target) => {
		setText(target.value);
		if (!emptyField) {
			setIsUpdating(true);
		}
	};

	const onClickCancel = () => {
		setIsOpenInput(false);
		setText(newTaskText);
	};

	const onClickSend = () => {
		if (taskArray.value) {
			console.log("запускаем update", text);
			requestUpdate(text);
		} else {
			console.log("запускаем add");
			requestAdd(text, id);
		}

		setIsOpenInput(false);
		setEmptyField(false);
		setRefreshTodos(!refreshTodos);
	};

	const onClickDeleteText = () => {
		setText("");
	};

	return (
		<div className={styles.wrapper}>
			{isOpenInput ? (
				<InputField
					text={text}
					onClickSend={onClickSend}
					onChangeInput={onChangeInput}
					onClickDeleteTask={onClickDeleteTask}
					onClickCancel={onClickCancel}
					onClickDeleteText={onClickDeleteText}
				/>
			) : (
				<TodoField
					value={value}
					isArray={isArray}
					taskArray={taskArray}
					onClickDeleteTask={onClickDeleteTask}
					onClickAddTask={onClickAddTask}
					isOpenInput={isOpenInput}
					text={text}
					onChangeInput={onChangeInput}
					onClickCancel={onClickCancel}
					onClickSend={onClickSend}
					id={id}
					refreshTodos={refreshTodos}
				/>
			)}
		</div>
	);
};

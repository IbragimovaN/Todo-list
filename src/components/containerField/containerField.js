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

export const ContainerField = ({
	id,
	value,
	refreshTodos,
	setRefreshTodos,
	text,
	setText,
	taskArray,
	newTaskText,
}) => {
	const [isOpenInput, setIsOpenInput] = useState(false);
	const [isArray, setIsArray] = useState(false);
	const [emptyField, setEmptyField] = useState(true);

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
		if (refreshTodos) {
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
					onClickDeleteTask={onClickDeleteTask}
					onClickAddTask={onClickAddTask}
				/>
			)}
		</div>
	);
};

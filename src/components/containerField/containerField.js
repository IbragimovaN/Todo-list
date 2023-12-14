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
	setTaskArray,
	newTaskText,
}) => {
	const [isOpenInput, setIsOpenInput] = useState(false);
	const [isArray, setIsArray] = useState(false);
	const [emptyField, setEmptyField] = useState(true);

	const { isUpdating, requestUpdate, setIsUpdating } = useRequestUpdate();

	const { isDeleting, requestDeleting } = useRequestDeleting(
		refreshTodos,
		setRefreshTodos,
	);

	const onClickAddTask = (e) => {
		e.preventDefault();
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

	const onClickEdit = (e) => {
		e.preventDefault();
		console.log("запускаем update", text);
		requestUpdate(taskArray, setTaskArray, text, id);

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
					onClickEdit={onClickEdit}
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

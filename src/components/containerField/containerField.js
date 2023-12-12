import { useEffect, useState } from "react";
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

	const { taskArray } = useRequestGet(refreshTodos, id);
	const { isUpdating, requestUpdate, setIsUpdating } = useRequestUpdate(
		refreshTodos,
		setRefreshTodos,
		id,
	);
	const { isCreating, requestAdd } = useRequestAdd(
		setRefreshTodos,
		refreshTodos,
	);
	const { isDeleting, requestDeleting } = useRequestDeleting();

	const onClickAddTask = () => {
		setText(taskArray.value);
		setIsOpenInput(true);
		setIsArray(true);
	};

	const onClickDeleteTask = () => {
		setRefreshTodos(true);
	};

	const onChangeInput = (target) => {
		setText(target.value);
		if (!emptyField) {
			setIsUpdating(true);
		}
	};

	const onClickCancel = () => {
		setIsOpenInput(false);
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

	return (
		<div className={styles.wrapper}>
			{isOpenInput ? (
				<InputField
					text={text}
					onClickSend={onClickSend}
					onChangeInput={onChangeInput}
					onClickDeleteTask={onClickDeleteTask}
					onClickCancel={onClickCancel}
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

import { useEffect, useState } from "react";
import styles from "./containerField.module.css";
import { useRequestAdd, useRequestDeleting } from "../../hooks";
import { TodoField } from "../todoField/todoField";
import { InputField } from "../inputField/inputField";

export const ContainerField = ({
	taskArray,
	refreshTodos,
	setRefreshTodos,
	id,
	value,
}) => {
	const randomId = Math.floor(new Date().getTime() / 1000);

	const [isOpenInput, setIsOpenInput] = useState(false);
	const [text, setText] = useState("");
	const [valueText, setValueText] = useState("");
	const [taskText, setTaskText] = useState("Новая задача");
	const [currentTask, setCurrentTask] = useState({ value: "", id: "" });
	const [isArray, setIsArray] = useState(false);

	const { isCreating, requestAdd } = useRequestAdd(
		setRefreshTodos,
		refreshTodos,
	);
	const { isDeleting, requestDeleting } = useRequestDeleting();

	const onClickAddTask = () => {
		setIsOpenInput(true);
		setIsArray(true);
	};

	const onClickDeleteTask = () => {
		setTaskText("новая задача");
		setRefreshTodos(true);
	};

	const onChangeInput = (target) => {
		setText(target.value);
	};

	const onClickCancel = () => {
		setIsOpenInput(false);
		setCurrentTask({ value: "", id: "" });
	};

	const onClickSend = () => {
		setCurrentTask({ value: text, id: randomId });
		setIsOpenInput(false);

		requestAdd(text, randomId);
		setIsArray(true);
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
					taskText={taskText}
					isOpenInput={isOpenInput}
					text={text}
					onChangeInput={onChangeInput}
					onClickCancel={onClickCancel}
					onClickSend={onClickSend}
				/>
			)}
		</div>
	);
};

import { useEffect, useState } from "react";
import styles from "./containerField.module.css";
import { useRequestAdd, useRequestDeleting } from "../../hooks";
import { TodoField } from "../todoField/todoField";

export const ContainerField = ({
	taskArray,
	refreshTodos,
	setRefreshTodos,
}) => {
	console.log(taskArray);
	// const [todosArr, setTodosArr] = useState([]);
	// // setTodosArr(taskArray);

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
		// requestDeleting(id);
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

		// setRefreshTodos(!refreshTodos);
		console.log(taskArray);
		requestAdd(text, randomId);
		setIsArray(true);
		// setTodosArr({ ...todosArr, currentTask });
	};

	// useEffect(() => {
	// 	let textTask = taskArray.filter((task) => {
	// 		return task.id === currentTask.id;
	// 	});
	// 	let textRender = textTask[0]?.value;
	// 	setTaskText(textRender);
	// }, [currentTask, taskArray]);

	return (
		<div className={styles.wrapper}>
			<TodoField
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
		</div>
	);
};

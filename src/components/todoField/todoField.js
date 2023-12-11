import { useEffect, useState } from "react";
import styles from "./todoField.module.css";
import { useRequestAdd, useRequestDeleting } from "../../hooks";

export const TodoField = ({ taskArray, refreshTodos, setRefreshTodos }) => {
	// console.log(taskArray);
	// const [todosArr, setTodosArr] = useState([]);
	// // setTodosArr(taskArray);

	const randomId = Math.floor(new Date().getTime() / 1000);

	const [isOpenInput, setIsOpenInput] = useState(false);
	const [text, setText] = useState("");
	const [taskText, setTaskText] = useState("Новая задача");
	const [currentTask, setCurrentTask] = useState({ value: "", id: "" });

	const { isCreating, requestAdd } = useRequestAdd(
		setRefreshTodos,
		refreshTodos,
	);
	const { isDeleting, requestDeleting } = useRequestDeleting();

	const onClickAddTask = () => {
		setIsOpenInput(true);
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
		// setTodosArr({ ...todosArr, currentTask });
	};

	useEffect(() => {
		let textTask = taskArray.filter((task) => {
			return task.id === currentTask.id;
		});
		let textRender = textTask[0]?.value;
		setTaskText(textRender);
	}, [currentTask, taskArray]);

	return (
		<div className={styles.wrapper}>
			{isOpenInput ? (
				<div className={styles.wrapperInput}>
					<input
						className={styles.input}
						type="text"
						value={text}
						onChange={({ target }) => onChangeInput(target)}
					></input>
					<div>
						<button onClick={onClickDeleteTask}>Удалить</button>
						<button onClick={onClickCancel}>Отмена</button>
						<button onClick={onClickSend}>Отрправить</button>
					</div>
				</div>
			) : (
				<div className={styles.wrapperTodo}>
					<div>{taskText}</div>
					<div>
						<button onClick={onClickDeleteTask}>Удалить</button>
						<button onClick={onClickAddTask}>Добавить/изменить</button>
					</div>
				</div>
			)}
		</div>
	);
};

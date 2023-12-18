import styles from "./todoField.module.css";
import { InputField } from "../inputField/inputField";
import { useState } from "react";

export const TodoField = ({
	value,
	requestDeleting,
	id,
	text,
	setText,
	requestUpdate,
	taskArray,
	setTaskArray,
	setRefreshTodos,
	refreshTodos,
}) => {
	const [isOpenInput, setIsOpenInput] = useState(false);
	const [completed, setCompleted] = useState(false);

	const onClickDeleteTask = () => {
		requestDeleting(id);
	};

	const onClickEditTask = () => {
		// setText(taskArray.value);
		setIsOpenInput(true);
	};

	const onCompletedChange = (newCompleted) => {
		setCompleted(newCompleted);
		console.log(newCompleted);
		// console.log(completed, id);
	};

	return (
		<>
			{isOpenInput ? (
				<InputField
					text={text}
					setText={setText}
					requestUpdate={requestUpdate}
					taskArray={taskArray}
					setTaskArray={setTaskArray}
					id={id}
					setIsOpenInput={setIsOpenInput}
					setRefreshTodos={setRefreshTodos}
					refreshTodos={refreshTodos}
					value={value}
				/>
			) : (
				<div className={styles.wrapperTodo}>
					<input
						className={styles.checkedTask}
						type="checkbox"
						checked={completed}
						onChange={({ target }) => onCompletedChange(target.checked)}
					/>
					<div className={styles.textTask}>{value}</div>
					<div className={styles.buttonWrapper}>
						<button className={styles.editBtn} onClick={onClickEditTask}>
							✎{" "}
						</button>
						<button className={styles.deleteBtn} onClick={onClickDeleteTask}>
							✖
						</button>
					</div>
				</div>
			)}
		</>
	);
};

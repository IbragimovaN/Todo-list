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

	const onCompletedChange = (e) => {
		// e.preventDefault();
		setCompleted(e.target.checked);
		console.log(e.target.checked, id);
		requestUpdate(taskArray, setTaskArray, id, {
			id: id,
			completed: completed,
		});
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
						onChange={(e) => onCompletedChange(e)}
					/>
					<div className={styles.textTask}>{value}</div>
					<div className={styles.buttonWrapper}>
						<button className={styles.editBtn} onClick={onClickEditTask}>
							✎
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

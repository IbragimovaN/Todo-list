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
	const onClickDeleteTask = () => {
		requestDeleting(id);
	};

	const onClickEditTask = () => {
		// setText(taskArray.value);
		setIsOpenInput(true);
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
					<div>{value}</div>
					<div>
						<button onClick={onClickDeleteTask}>Удалить</button>
						<button onClick={onClickEditTask}>Изменить</button>
					</div>
				</div>
			)}
		</>
	);
};

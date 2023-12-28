import styles from "./todoField.module.css";
import { InputField } from "./inputField/inputField";
import { useState } from "react";
import { updateTodo, deleteTodo } from "../../api/api";
import { setTodoInTodos, removeTodoInTodos } from "../../utils";

export const TodoField = ({
	todos,
	setTodos,
	id,
	title,
	completed,
	refreshTodos,
	setRefreshTodos,
}) => {
	const [isOpenInput, setIsOpenInput] = useState(false);
	const [inputText, setInputText] = useState("");

	const onCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	const onClickDeleteTask = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
	};

	const onClickEditTask = () => {
		setInputText(title);
		setIsOpenInput(true);
	};
	return (
		<>
			{isOpenInput ? (
				<InputField
					setIsOpenInput={setIsOpenInput}
					title={title}
					inputText={inputText}
					setInputText={setInputText}
					todos={todos}
					setTodos={setTodos}
					refreshTodos={refreshTodos}
					setRefreshTodos={setRefreshTodos}
					id={id}
				/>
			) : (
				<div className={styles.wrapperTodo}>
					<input
						className={styles.checkedTask}
						type="checkbox"
						checked={completed}
						onChange={({ target }) => onCompletedChange(id, target.checked)}
					/>
					<div className={styles.textTask}>{title}</div>
					<div className={styles.buttonWrapper}>
						<button className={styles.editBtn} onClick={onClickEditTask}>
							✎
						</button>
						<button
							className={styles.deleteBtn}
							onClick={() => onClickDeleteTask(id)}
						>
							✖
						</button>
					</div>
				</div>
			)}
		</>
	);
};

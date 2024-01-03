import styles from "./todoField.module.css";
import { InputField } from "./inputField/inputField";
import { useState, useContext } from "react";
import { updateTodo, deleteTodo } from "../../api/api";
import { setTodoInTodos, removeTodoInTodos } from "../../utils";
import { AppContext } from "../../context";

export const TodoField = ({ id, title, completed }) => {
	const { dispatch, todos } = useContext(AppContext);
	const [isOpenInput, setIsOpenInput] = useState(false);
	const [inputText, setInputText] = useState("");

	const onCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			dispatch({
				type: "SET_TODOS",
				payload: setTodoInTodos(todos, { id, completed: newCompleted }),
			});
		});
	};

	const onClickDeleteTask = (id) => {
		deleteTodo(id).then(() => {
			dispatch({
				type: "SET_TODOS",
				payload: removeTodoInTodos(todos, id),
			});
		});
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

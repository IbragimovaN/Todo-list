import styles from "./todoField.module.css";
import { InputField } from "./inputField/inputField";
import { updateTodo, deleteTodo } from "../../api/api";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeTodos } from "../../actions";

export const TodoField = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const [isOpenInput, setIsOpenInput] = useState(false);

	const onCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted });
		dispatch(changeTodos());
	};

	const onClickDeleteTask = (id) => {
		deleteTodo(id);
		dispatch(changeTodos());
	};

	const onClickEditTask = () => {
		dispatch({
			type: "SET_INPUT_TEXT",
			payload: title,
		});

		setIsOpenInput(true);
	};
	return (
		<>
			{isOpenInput ? (
				<InputField title={title} id={id} setIsOpenInput={setIsOpenInput} />
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

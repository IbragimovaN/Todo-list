import { useState } from "react";
import styles from "./todoField.module.css";
import { useRequestAdd, useRequestDeleting } from "../../hooks";

export const TodoField = () => {
	const [taskArray, setTaskArray] = useState([]);
	const [isOpenInput, setIsOpenInput] = useState(false);
	const defaultText = "Новая задача";
	const [taskText, setTaskText] = useState(defaultText);
	const [inputValue, setInputValue] = useState("");

	const { isCreating, requestAdd } = useRequestAdd();
	const { isDeleting, requestDeleting } = useRequestDeleting();

	const onClickAddTask = () => {
		setIsOpenInput(true);
	};

	const onClickDeleteTask = () => {
		setTaskText(defaultText);
		// requestDeleting(id);
	};

	const onChangeInput = (target) => {
		setInputValue(target.value);
	};

	const onClickCancel = () => {
		setIsOpenInput(false);
		setInputValue("");
	};

	const onClickSend = () => {
		setTaskText(inputValue);
		setIsOpenInput(false);
		requestAdd(inputValue);
		setTaskArray({ ...taskArray, inputValue });
	};

	return (
		<div className={styles.wrapper}>
			{isOpenInput ? (
				<div className={styles.wrapperInput}>
					<input
						className={styles.input}
						type="text"
						value={inputValue}
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

import styles from "./inputField.module.css";
import { useState } from "react";
export const InputField = ({
	requestUpdate,
	taskArray,
	setTaskArray,
	id,
	setIsOpenInput,
	setRefreshTodos,
	refreshTodos,
	value,
}) => {
	const [inputText, setInputText] = useState(value);
	const onClickSendUpdatedTask = (e) => {
		e.preventDefault();
		requestUpdate(taskArray, setTaskArray, inputText, id);
		setIsOpenInput(false);
		setRefreshTodos(!refreshTodos);
	};
	const onClickCancel = () => {
		setIsOpenInput(false);
	};

	const onChangeInput = (target) => {
		setInputText(target.value);
	};

	const onClickCleanText = () => {
		setInputText("");
	};

	return (
		<form
			onSubmit={(e) => onClickSendUpdatedTask(e)}
			className={styles.wrapperInput}
		>
			<input
				className={styles.input}
				type="text"
				value={inputText}
				onChange={({ target }) => onChangeInput(target)}
			></input>
			<div>
				<button onClick={onClickCleanText}>Стереть</button>
				<button onClick={onClickCancel}>Отмена</button>
				<button type="submit" disabled={!inputText}>
					Отрправить
				</button>
			</div>
		</form>
	);
};

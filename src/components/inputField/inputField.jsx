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
	isUpdating,
}) => {
	const [inputText, setInputText] = useState(value);
	const onClickSendUpdatedTask = (e) => {
		e.preventDefault();
		requestUpdate(taskArray, setTaskArray, id, {
			value: inputText,
		});

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
			<div className={styles.buttonsWrapper}>
				<button className={styles.cleanBtn} onClick={onClickCleanText}>
					⌫
				</button>
				<button className={styles.cancelBtn} onClick={onClickCancel}>
					↶
				</button>
				<button
					className={styles.sendingBtn}
					type="submit"
					disabled={!inputText}
				>
					✔
				</button>
			</div>
		</form>
	);
};

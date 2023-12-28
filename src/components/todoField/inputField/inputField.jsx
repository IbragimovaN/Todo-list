import styles from "./inputField.module.css";
import { updateTodo } from "../../../api/api";
import { setTodoInTodos } from "../../../utils";

export const InputField = ({
	id,
	setIsOpenInput,
	inputText,
	setInputText,
	todos,
	setTodos,
	refreshTodos,
	setRefreshTodos,
}) => {
	const onClickSendUpdatedTask = (e) => {
		e.preventDefault();
		updateTodo({ id, title: inputText }).then(() => {
			console.log(id);
			setTodos(setTodoInTodos(todos, { id, title: inputText }));
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

	const onClickCleanText = (e) => {
		e.preventDefault();
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
			/>
			<div className={styles.buttonsWrapper}>
				<button
					className={styles.cleanBtn}
					onClick={(e) => onClickCleanText(e)}
				>
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

import styles from "./inputField.module.css";
import { updateTodo } from "../../../api/api";
import { setTodoInTodos } from "../../../utils";
import { AppContext } from "../../../context";
import { useContext } from "react";

export const InputField = ({ id, setIsOpenInput, inputText, setInputText }) => {
	const { dispatch, todos } = useContext(AppContext);
	const onClickSendUpdatedTask = (e) => {
		e.preventDefault();
		updateTodo({ id, title: inputText }).then(() => {
			dispatch({
				type: "SET_TODOS",
				payload: setTodoInTodos(todos, { id, title: inputText }),
			});
		});
		setIsOpenInput(false);
		dispatch({ type: "SET_REFRESH_TODOS" });
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

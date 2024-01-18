import styles from "./inputField.module.css";
import { updateTodo } from "../../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { changeTodos } from "../../../actions";

export const InputField = ({ id, setIsOpenInput }) => {
	const inputText = useSelector((state) => state.todoFieldState.inputText);
	const dispatch = useDispatch();

	const onClickSendUpdatedTask = (e) => {
		e.preventDefault();
		updateTodo({ id, title: inputText });
		dispatch(changeTodos());

		setIsOpenInput(false);
		dispatch({ type: "SET_REFRESH_TODOS" });
	};

	const onClickCancel = () => {
		setIsOpenInput(false);
	};

	const onChangeInput = (target) => {
		dispatch({
			type: "SET_INPUT_TEXT",
			payload: target.value,
		});
	};

	const onClickCleanText = (e) => {
		e.preventDefault();
		dispatch({
			type: "SET_INPUT_TEXT",
			payload: "",
		});
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

import styles from "./inputField.module.css";
import PropTypes from "prop-types";

export const InputField = ({
	text,
	onClickSend,
	onChangeInput,
	onClickDeleteTask,
	onClickCancel,
}) => {
	return (
		<div className={styles.wrapperInput}>
			<input
				className={styles.input}
				type="text"
				value={text}
				onChange={({ target }) => onChangeInput(target)}
			></input>
			<div>
				<button onClick={onClickDeleteTask}>Удалить</button>
				<button onClick={onClickCancel}>Отмена</button>
				<button onClick={onClickSend}>Отрправить</button>
			</div>
		</div>
	);
};
// InputField.propTypes = {
// 	text: PropTypes.string,
// };
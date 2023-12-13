import styles from "./todoField.module.css";
import PropTypes from "prop-types";

export const TodoField = ({ onClickDeleteTask, onClickAddTask, value }) => {
	return (
		<div className={styles.wrapperTodo}>
			<div>{value}</div>
			<div>
				<button onClick={onClickDeleteTask}>Удалить</button>
				<button onClick={onClickAddTask}>Изменить</button>
			</div>
		</div>
	);
};

TodoField.propTypes = {
	text: PropTypes.string,
};

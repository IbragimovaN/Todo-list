import styles from "./todoField.module.css";
import PropTypes from "prop-types";

export const TodoField = ({
	onClickDeleteTask,
	onClickAddTask,
	text,
	value,
}) => {
	return (
		<div className={styles.wrapperTodo}>
			<div>{value}</div>
			<div>
				<button onClick={onClickDeleteTask}>Удалить</button>
				<button onClick={onClickAddTask}>Добавить/изменить</button>
			</div>
		</div>
	);
};

TodoField.propTypes = {
	text: PropTypes.string,
};

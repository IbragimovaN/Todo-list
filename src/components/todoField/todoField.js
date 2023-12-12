import styles from "./todoField.module.css";
import PropTypes from "prop-types";

export const TodoField = ({
	onClickDeleteTask,
	onClickAddTask,
	text,
	value,
	taskArray,
	id,
	refreshTodos,
}) => {
	return (
		<div className={styles.wrapperTodo}>
			<div>{!taskArray.value ? text : taskArray.value}</div>
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

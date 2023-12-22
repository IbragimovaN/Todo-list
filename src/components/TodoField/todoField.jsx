import styles from "./todoField.module.css";
export const TodoField = ({ id, title, completed, onClickOpenTask }) => {
	const onCompletedChange = (e) => {
		completed = e.target.checked;
		console.log(e.target.checked);
		// requestUpdate(taskArray, setTaskArray, id, {
		// 	id: id,
		// 	complete: completed,
		// });
	};
	return (
		<label className={styles.wrapperTodo} onClick={onClickOpenTask}>
			<input
				className={styles.checkedTask}
				type="checkbox"
				checked={completed}
				onChange={(e) => onCompletedChange(e)}
			/>
			<div>{title}</div>
		</label>
	);
};

import styles from "./controlPanel.module.css";
import { useState } from "react";
import { Search } from "../inputSearch/search";
import { Sorting } from "../sorting/sorting";
import { AddTaskField } from "../addTaskField/addTaskField";

export const ControlPanel = ({
	setRefreshTodos,
	refreshTodos,
	onSorting,
	onSearch,
}) => {
	const [isActiveAddTask, setIsActiveAddTask] = useState(false);
	const onClickAddTask = () => {
		setIsActiveAddTask(true);
	};
	return (
		<div className={styles.wrapperControlPanel}>
			{isActiveAddTask ? (
				<AddTaskField
					setRefreshTodos={setRefreshTodos}
					refreshTodos={refreshTodos}
					setIsActiveAddTask={setIsActiveAddTask}
				/>
			) : (
				<>
					<Search onSearch={onSearch} />
					<Sorting onSorting={onSorting} />
					<button className={styles.btnAddTask} onClick={onClickAddTask}>
						добавить задачу
					</button>
				</>
			)}
		</div>
	);
};

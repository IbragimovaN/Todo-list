import styles from "./controlPanel.module.css";
import { useState } from "react";
import { Search } from "./components/inputSearch/search";
import { Sorting } from "./components/sorting/sorting";
import { AddTaskField } from "./components/addTaskField/addTaskField";

export const ControlPanel = () => {
	const [isActiveAddTask, setIsActiveAddTask] = useState(false);
	const onClickAddTask = () => {
		setIsActiveAddTask(true);
	};
	return (
		<div className={styles.wrapperControlPanel}>
			{isActiveAddTask ? (
				<AddTaskField setIsActiveAddTask={setIsActiveAddTask} />
			) : (
				<>
					<Search />
					<Sorting />
					<button className={styles.btnAddTask} onClick={onClickAddTask}>
						добавить задачу
					</button>
				</>
			)}
		</div>
	);
};

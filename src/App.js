import styles from "./app.module.css";
import { useState } from "react";

import { ContainerField } from "./components/containerField/containerField";
import { InputSearch } from "./components/inputSearch/inputSearch";
import { useRequestGet, useGetSearch, useRequestAdd } from "./hooks";
import { InputAddTask } from "./components/inputAddTask/inputAddTask";
import { Sorting } from "./components/sorting/sorting";

export const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const newTaskText = "Новая задача";
	const [isSearch, setIsSearch] = useState(false);
	const [text, setText] = useState(newTaskText);
	const [isActiveAddTask, setIsActiveAddTask] = useState(false);

	const [refreshTodos, setRefreshTodos] = useState(true);
	const { taskArray, setTaskArray } = useRequestGet(
		refreshTodos,
		setText,
		newTaskText,
	);

	const onChangeSearch = (target) => {
		setSearchValue(target.value);
		setIsSearch(true);
	};

	const filterTask = useGetSearch();
	const currentTasks = filterTask(searchValue, taskArray);

	const onClickAddTask = () => {
		setIsActiveAddTask(true);
	};

	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<InputSearch onChangeSearch={onChangeSearch} searchValue={searchValue} />
			<Sorting
				taskArray={taskArray}
				setTaskArray={setTaskArray}
				refreshTodos={refreshTodos}
				setRefreshTodos={setRefreshTodos}
				text={text}
			/>
			{currentTasks.map(({ id, value }) => (
				<ContainerField
					id={id}
					refreshTodos={refreshTodos}
					setRefreshTodos={setRefreshTodos}
					key={id}
					value={value}
					text={text}
					setText={setText}
					taskArray={taskArray}
					newTaskText={newTaskText}
				/>
			))}
			{isActiveAddTask ? (
				<InputAddTask
					setRefreshTodos={setRefreshTodos}
					refreshTodos={refreshTodos}
					setIsActiveAddTask={setIsActiveAddTask}
				/>
			) : (
				<button className={styles.btnAddTask} onClick={onClickAddTask}>
					добавить задачу
				</button>
			)}
		</div>
	);
};

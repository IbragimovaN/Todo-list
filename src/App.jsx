import styles from "./app.module.css";
import { useState } from "react";

import { ContainerField } from "./components/containerField/containerField";
import { InputSearch } from "./components/inputSearch/inputSearch";
import {
	useRequestGet,
	useGetSearch,
	useRequestAdd,
	useRequestUpdate,
	useRequestDeleting,
} from "./hooks";
import { InputAddTask } from "./components/inputAddTask/inputAddTask";
import { Sorting } from "./components/sorting/sorting";

export const App = () => {
	const [text, setText] = useState("");
	const [isActiveAddTask, setIsActiveAddTask] = useState(false);
	const [refreshTodos, setRefreshTodos] = useState(true);
	const [isSearch, setIsSearch] = useState(false);

	const { taskArray, isLoading, setTaskArray } = useRequestGet();
	const { isCreating, requestAdd } = useRequestAdd(
		setRefreshTodos,
		refreshTodos,
	);
	const { requestUpdate } = useRequestUpdate();
	const { requestDeleting } = useRequestDeleting(refreshTodos, setRefreshTodos);

	const { onChangeSearch, searchValue, currentTasks } = useGetSearch(
		taskArray,
		isSearch,
		setIsSearch,
	);

	const onClickAddTask = () => {
		setIsActiveAddTask(true);
	};

	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<InputSearch onChangeSearch={onChangeSearch} searchValue={searchValue} />
			<Sorting taskArray={taskArray} setTaskArray={setTaskArray} />

			<ContainerField
				refreshTodos={refreshTodos}
				setRefreshTodos={setRefreshTodos}
				text={text}
				setText={setText}
				taskArray={taskArray}
				setTaskArray={setTaskArray}
				requestUpdate={requestUpdate}
				requestDeleting={requestDeleting}
				currentTasks={currentTasks}
				isLoading={isLoading}
			/>

			{isActiveAddTask ? (
				<InputAddTask
					setRefreshTodos={setRefreshTodos}
					refreshTodos={refreshTodos}
					setIsActiveAddTask={setIsActiveAddTask}
					requestAdd={requestAdd}
					isCreating={isCreating}
				/>
			) : (
				<button className={styles.btnAddTask} onClick={onClickAddTask}>
					добавить задачу
				</button>
			)}
		</div>
	);
};

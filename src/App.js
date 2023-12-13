import styles from "./app.module.css";
import { useState } from "react";

import { ContainerField } from "./components/containerField/containerField";
import { InputSearch } from "./components/inputSearch/inputSearch";
import { useRequestGet, useGetSearch } from "./hooks";
export const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const newTaskText = "Новая задача";
	const [isSearch, setIsSearch] = useState(false);
	const [text, setText] = useState(newTaskText);

	const [refreshTodos, setRefreshTodos] = useState(true);
	const { taskArray } = useRequestGet(refreshTodos, setText, newTaskText);

	const onChangeSearch = (target) => {
		console.log("запускается");
		setSearchValue(target.value);
		setIsSearch(true);
	};

	const filterTask = useGetSearch();
	const currentTasks = filterTask(searchValue, taskArray);

	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<InputSearch onChangeSearch={onChangeSearch} searchValue={searchValue} />
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
		</div>
	);
};

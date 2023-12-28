import styles from "./app.module.css";
import { useState, useEffect } from "react";
import { readTodos } from "./api/api";
import { ControlPanel } from "./components/controlPanel/controlPanel";
import { TodoField } from "./components/todoField/todoField";

export const App = () => {
	const [refreshTodos, setRefreshTodos] = useState(true);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [refreshTodos, searchPhrase, isAlphabetSorting]);

	return (
		<div className={styles.mainPage}>
			<ControlPanel
				onSearch={setSearchPhrase}
				onSorting={setIsAlphabetSorting}
				setRefreshTodos={setRefreshTodos}
				refreshTodos={refreshTodos}
			/>
			{todos.map(({ id, title, completed }) => (
				<TodoField
					key={id}
					id={id}
					title={title}
					completed={completed}
					todos={todos}
					setTodos={setTodos}
					refreshTodos={refreshTodos}
					setRefreshTodos={setRefreshTodos}
				/>
			))}
		</div>
	);
};

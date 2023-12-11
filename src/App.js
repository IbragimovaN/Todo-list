import styles from "./app.module.css";
import { useState } from "react";
import { TodoField } from "./components/todoField/todoField";
import { useRequestGet } from "./hooks";

export const App = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);
	const { taskArray } = useRequestGet(refreshTodos);

	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<TodoField
				taskArray={taskArray}
				refreshTodos={refreshTodos}
				setRefreshTodos={setRefreshTodos}
			/>
			<TodoField
				taskArray={taskArray}
				refreshTodos={refreshTodos}
				setRefreshTodos={setRefreshTodos}
			/>
			{/* <TodoField />
			<TodoField /> */}
		</div>
	);
};

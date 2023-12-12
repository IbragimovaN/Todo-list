import styles from "./app.module.css";
import { useState } from "react";
import { ContainerField } from "./components/containerField/containerField";
import { useRequestGet } from "./hooks";

export const App = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);
	const { taskArray } = useRequestGet(refreshTodos);
	console.log(taskArray);

	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<ContainerField
				taskArray={taskArray}
				refreshTodos={refreshTodos}
				setRefreshTodos={setRefreshTodos}
			/>
		</div>
	);
};

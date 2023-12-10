import styles from "./app.module.css";
import { TodoField } from "./components/todoField/todoField";

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<TodoField />
			<TodoField />
			<TodoField />
			<TodoField />
		</div>
	);
};

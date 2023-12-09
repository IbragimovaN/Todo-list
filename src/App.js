// import { useState } from "react";
import styles from "./app.module.css";
import { Todos } from "./components/todos/todos";
// import { TodoField } from "./components/todoField/todoField";

export const App = () => {
	// const [isAddField, setIsAddField] = useState("addFieldMarker");
	// const onClickAddField = () => {
	// 	setIsAddField(!isAddField);
	// };

	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			{/* <TodoField />
			<button onClick={onClickAddField}>Добавить поле с задачей</button> */}
			<Todos />
		</div>
	);
};

// {isLoading ? <div className={styles.loader}></div> : <Todos />}

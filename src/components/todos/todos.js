import styles from "./todos.module.css";
import { useRequestGet, useRequestAdd } from "./hooks";
// import { Buttons } from "../buttons/button";
import PropTypes from "prop-types";
import { useState } from "react";

export const Todos = () => {
	// const deleteTodo = (arrayTodos, target) => {
	// 	let currentTodoWrapper = target.parentNode;
	// 	console.log(currentTodoWrapper);
	// };

	const { todos } = useRequestGet();

	// const [todosList, setTodosList] = useState([]);
	// setTodosList(todos);

	const { requestAdd } = useRequestAdd();
	return (
		<div className={styles.wrapper}>
			{todos.map(({ id, value }) => (
				<div className={styles.todosWrapper}>
					<input type="text" value={value} key={id}></input>
					<button>удалить</button>
					<button onClick={requestAdd}>отправить</button>
				</div>
			))}
		</div>
	);
};

Todos.propTypes = {
	deleteTodo: PropTypes.func,
	todos: PropTypes.array,
	// submitButtonRef: PropTypes.object,
};

import styles from "./app.module.css";
import { useEffect } from "react";
import { ControlPanel } from "./components/controlPanel/controlPanel";
import { TodoField } from "./components/todoField/todoField";
import { useSelector, useDispatch } from "react-redux";
import { changeTodos } from "./actions";

export const App = () => {
	const todos = useSelector((state) => state.todoState);

	const searchPhrase = useSelector(
		(state) => state.controlPanelState.searchPhrase,
	);
	const refreshTodos = useSelector(
		(state) => state.controlPanelState.refreshTodos,
	);
	const isAlphabetSorting = useSelector(
		(state) => state.controlPanelState.isAlphabetSorting,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changeTodos(searchPhrase, isAlphabetSorting));
	}, [refreshTodos, searchPhrase, isAlphabetSorting, dispatch]);

	return (
		<div className={styles.mainPage}>
			<ControlPanel />

			{todos.map(({ id, title, completed }) => (
				<TodoField key={id} id={id} title={title} completed={completed} />
			))}
		</div>
	);
};

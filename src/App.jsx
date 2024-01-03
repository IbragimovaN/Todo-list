import styles from "./app.module.css";
import { useState, useEffect } from "react";
import { readTodos } from "./api/api";
import { ControlPanel } from "./components/controlPanel/controlPanel";
import { TodoField } from "./components/todoField/todoField";
import { AppContext } from "./context.js";

export const App = () => {
	const [refreshTodos, setRefreshTodos] = useState(true);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);
	const [todos, setTodos] = useState([]);

	const dispatch = (action) => {
		const { type, payload } = action;

		switch (type) {
			case "SET_SEARCH_PHRASE": {
				setSearchPhrase(payload);
				break;
			}
			case "SET_SORTING": {
				setIsAlphabetSorting(payload);
				break;
			}
			case "SET_REFRESH_TODOS": {
				setRefreshTodos({ ...action, payload: !refreshTodos });
				break;
			}
			case "SET_TODOS": {
				setTodos(payload);
				break;
			}
			default:
			// ничего не делать
		}
	};

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [refreshTodos, searchPhrase, isAlphabetSorting]);

	return (
		<AppContext.Provider
			value={{
				dispatch,
				todos,
			}}
		>
			<div className={styles.mainPage}>
				<ControlPanel />

				{todos.map(({ id, title, completed }) => (
					<TodoField key={id} id={id} title={title} completed={completed} />
				))}
			</div>
		</AppContext.Provider>
	);
};

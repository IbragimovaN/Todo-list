import styles from "./manePage.module.css";
import { AddTaskField } from "../addTaskField/addTaskField";
import { useState, useEffect } from "react";
import { readTodos } from "../../api/api";
import { TodoField } from "../TodoField/todoField";
import { Search } from "../inputSearch/search";
import { Sorting } from "../sorting/sorting";
import { Link, Outlet } from "react-router-dom";

export const MainPage = ({ todos, setTodos }) => {
	const [refreshTodos, setRefreshTodos] = useState(true);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);

	const [isOpenTask, setIsOpenTask] = useState(false);

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [refreshTodos, searchPhrase, isAlphabetSorting]);

	const onClickOpenTask = () => {
		setIsOpenTask(true);
	};

	return (
		<div className={styles.mainPage}>
			{isOpenTask === false ? (
				<>
					<AddTaskField
						setRefreshTodos={setRefreshTodos}
						refreshTodos={refreshTodos}
					/>
					<Search onSearch={setSearchPhrase} />
					<Sorting onSorting={setIsAlphabetSorting} />
					{todos.map(({ id, title, completed }) => (
						<Link to={`todo/${id}`} key={id}>
							<TodoField
								key={id}
								id={id}
								title={title}
								completed={completed}
								onClickOpenTask={onClickOpenTask}
							/>
						</Link>
					))}
				</>
			) : (
				<Outlet />
			)}
		</div>
	);
};

import styles from "./manePage.module.css";
import { useState, useEffect } from "react";
import { readTodos, updateTodo } from "../../api/api";
import { setTodoInTodos } from "../../utils";
import { Link, Outlet } from "react-router-dom";
import { ControlPanel } from "../controlPanel/controlPanel";

export const MainPage = ({ isOpenTask, setIsOpenTask }) => {
	const [refreshTodos, setRefreshTodos] = useState(true);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [refreshTodos, searchPhrase, isAlphabetSorting]);

	const onClickOpenTask = () => {
		setIsOpenTask(true);
	};

	const onCompletedChange = (id, newCompleted) => {
		console.log(newCompleted);
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	return (
		<div className={styles.mainPage}>
			{isOpenTask === false ? (
				<>
					<ControlPanel
						onSearch={setSearchPhrase}
						onSorting={setIsAlphabetSorting}
						setRefreshTodos={setRefreshTodos}
						refreshTodos={refreshTodos}
					/>
					{todos.map(({ id, title, completed }) => (
						<div key={id} className={styles.wrapperTodo}>
							<input
								className={styles.checkedTask}
								type="checkbox"
								checked={completed}
								onChange={({ target }) => onCompletedChange(id, target.checked)}
							/>
							<div onClick={onClickOpenTask}>
								<Link to={`todo/${id}`} key={id}>
									<div className={styles.link}>
										{title.length > 30 ? title.slice(0, 100) + "..." : title}
									</div>
								</Link>
							</div>
						</div>
					))}
				</>
			) : (
				<Outlet />
			)}
		</div>
	);
};

import styles from "./app.module.css";
import { useEffect, useState } from "react";

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((data) => data.json())
			.then((data) => {
				setTodos(data);
			})
			.finally(() => setLoading(false));
	}, []);
	return (
		<div className={styles.app}>
			<ol className={styles.dataContainer}>
				{todos.map(({ userId, title }) => {
					return loading ? (
						<div className={styles.loader}></div>
					) : (
						<div>
							<li className={styles.todoInner} key={userId}>
								{title}
							</li>
						</div>
					);
				})}
			</ol>
		</div>
	);
};

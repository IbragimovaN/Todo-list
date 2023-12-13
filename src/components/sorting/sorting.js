import styles from "./sorting.module.css";
import { useRequestUpdate } from "../../hooks";
export const Sorting = ({
	taskArray,
	setTaskArray,
	refreshTodos,
	setRefreshTodos,
}) => {
	const { requestUpdate } = useRequestUpdate(refreshTodos, setRefreshTodos);

	const onClickSorting = () => {
		console.log("нажали на сортировку");
		console.log(taskArray);
		const sortedTasks = taskArray.sort((a, b) => {
			if (a.value.toLowerCase() < b.value.toLowerCase()) {
				return -1;
			}
			if (a.value.toLowerCase() > b.value.toLowerCase()) {
				return 1;
			}
			return 0;
		});
		console.log(sortedTasks);

		sortedTasks.forEach(({ value, id }) => {
			requestUpdate(value, id);
		});

		setTaskArray(sortedTasks);
		console.log(taskArray);
		setRefreshTodos(!refreshTodos);
	};

	return (
		<button className={styles.btn} onClick={onClickSorting}>
			А⇵Я
		</button>
	);
};

import { useState } from "react";
import styles from "./sorting.module.css";
export const Sorting = ({ taskArray, setTaskArray }) => {
	const [order, setOrder] = useState("ASC");

	const onClickSorting = (sequence) => {
		const sortedTasks = Object.keys(taskArray)
			.sort((a, b) => {
				const taskA = taskArray[a].value.toLowerCase();
				const taskB = taskArray[b].value.toLowerCase();

				if (taskA < taskB) {
					return sequence === "ASC" ? -1 : 1;
				}
				if (taskA > taskB) {
					return sequence === "ASC" ? 1 : -1;
				}
				return 0;
			})
			.reduce((acc, key) => {
				acc[key] = taskArray[key];
				return acc;
			}, {});

		setOrder(sequence === "ASC" ? "DESC" : "ASC");
		setTaskArray(sortedTasks);
	};

	return (
		<button className={styles.btn} onClick={() => onClickSorting(order)}>
			А⇵Я
		</button>
	);
};

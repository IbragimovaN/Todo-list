import { useState } from "react";
import styles from "./sorting.module.css";

export const Sorting = ({ taskArray, setTaskArray }) => {
	const [order, setOrder] = useState("ASC");

	const onClickSorting = (sequence) => {
		if (sequence === "ASC") {
			const sortedTasks = taskArray.slice().sort((a, b) => {
				if (a.value.toLowerCase() < b.value.toLowerCase()) {
					return -1;
				}
				if (a.value.toLowerCase() > b.value.toLowerCase()) {
					return 1;
				}
				return 0;
			});
			setOrder("DESC");
			setTaskArray(sortedTasks);
		} else {
			const sortedTasks = taskArray.slice().sort((a, b) => {
				if (a.value.toLowerCase() > b.value.toLowerCase()) {
					return -1;
				}
				if (a.value.toLowerCase() < b.value.toLowerCase()) {
					return 1;
				}
				return 0;
			});
			setOrder("ASC");
			setTaskArray(sortedTasks);
		}
	};

	return (
		<button className={styles.btn} onClick={() => onClickSorting(order)}>
			А⇵Я
		</button>
	);
};

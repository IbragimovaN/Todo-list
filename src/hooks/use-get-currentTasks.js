import { useEffect } from "react";
export const useGetSearch = () => {
	// useEffect(() => {
	// 	fetch("http://localhost:3005/todos")
	// 		.then((todos) => todos.json())
	// 		.then((todos) => {
	// 			setTaskArr(todos);
	// 		});
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [isSearch]);

	const filterTask = (searchText, taskArr) => {
		if (!searchText) {
			return taskArr;
		}
		let currentTasks = taskArr.filter((task) => {
			return task.value.toLowerCase().includes(searchText.toLowerCase());
		});
		return currentTasks;
	};

	return filterTask;
};

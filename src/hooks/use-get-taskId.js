import { useEffect } from "react";
export const useGetSearch = (setTaskArr, taskArr, searchValue, isSearch) => {
	useEffect(() => {
		fetch("http://localhost:3005/todos")
			.then((todos) => todos.json())
			.then((todos) => {
				setTaskArr(todos);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSearch]);

	const filterTask = (searchText, taskArr) => {
		if (!searchText) {
			return taskArr;
		}
		let currentTask = taskArr.filter((task) => {
			return task.value.toLowerCase().includes(searchText.toLowerCase());
		});
		return currentTask;
	};

	const currentTaskId = filterTask(searchValue, taskArr);
	return currentTaskId;
};

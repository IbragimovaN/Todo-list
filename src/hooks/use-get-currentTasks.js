import { useState } from "react";

export const useGetSearch = (taskArray) => {
	const [searchValue, setSearchValue] = useState("");

	const filterTasks = (searchText, taskArray) => {
		if (!searchText) {
			return taskArray;
		}

		let filteredTasks = {};
		Object.keys(taskArray).forEach((key) => {
			if (
				taskArray[key].value.toLowerCase().includes(searchText.toLowerCase())
			) {
				filteredTasks[key] = taskArray[key];
			}
		});

		return filteredTasks;
	};

	const currentTasks = filterTasks(searchValue, taskArray);

	const onChangeSearch = (target) => {
		const searchText = target.value;
		setSearchValue(searchText);
	};

	return {
		onChangeSearch,
		searchValue,
		currentTasks,
	};
};

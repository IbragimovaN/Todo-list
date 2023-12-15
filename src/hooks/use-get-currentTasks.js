import { useState } from "react";

export const useGetSearch = (taskArray) => {
	const [searchValue, setSearchValue] = useState("");

	const filterTasks = (searchText, taskArr) => {
		if (!searchText) {
			return taskArr;
		}
		let filteredTasks = taskArr.filter((task) => {
			return task.value.toLowerCase().includes(searchText.toLowerCase());
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

//Решение с debonce но в этом случае изначально на экране ничего не отображается. пока так

// import { useState } from "react";
// import { debounce } from "lodash";

// export const useGetSearch = (taskArray, isSearch, setIsSearch) => {
// 	const [searchValue, setSearchValue] = useState("");
// 	const [currentTasks, setCurrentTasks] = useState([]);

// 	const filterTasks = (searchText, taskArr) => {
// 		if (!searchText) {
// 			return taskArr;
// 		}
// 		let filteredTasks = taskArr.filter((task) => {
// 			return task.value.toLowerCase().includes(searchText.toLowerCase());
// 		});
// 		return filteredTasks;
// 	};

// 	const debouncedFilterTasks = debounce((searchText) => {
// 		const filteredTasks = filterTasks(searchText, taskArray);
// 		setCurrentTasks(filteredTasks);
// 	}, 3000);

// 	const onChangeSearch = (target) => {
// 		setIsSearch(true);
// 		const searchText = target.value;
// 		setSearchValue(searchText);
// 		debouncedFilterTasks(searchText);
// 	};

// 	return {
// 		onChangeSearch,
// 		searchValue,
// 		currentTasks,
// 	};
// };

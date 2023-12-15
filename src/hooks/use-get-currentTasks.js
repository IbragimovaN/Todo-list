export const useGetSearch = () => {
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

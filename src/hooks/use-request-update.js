import { useState } from "react";

export const useRequestUpdate = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdate = async (taskArray, setTaskArray, id, updateObg) => {
		setIsUpdating(true);
		const currentTaskIndex = taskArray.findIndex((item) => {
			return item.id === id;
		});
		console.log(id);
		const response = await fetch(`http://localhost:3005/todos/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify(updateObg),
		});
		const updatedTask = response.json();
		console.log(updatedTask);
		const copyTaskArr = taskArray.slice();
		copyTaskArr[currentTaskIndex] = updatedTask;
		setTaskArray(copyTaskArr);
		setIsUpdating(false);
	};

	return { isUpdating, requestUpdate, setIsUpdating };
};

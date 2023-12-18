import { useState } from "react";

export const useRequestUpdate = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdate = async (
		taskArray,
		setTaskArray,
		inputText,
		id,
		completed,
	) => {
		setIsUpdating(true);
		const currentTaskIndex = taskArray.findIndex((item) => {
			return item.id === id;
		});
		console.log(completed);
		const response = await fetch(`http://localhost:3005/todos/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				value: inputText,
				completed: completed,
			}),
		});
		const updatedTask = response.json();
		const copyTaskArr = taskArray.slice();
		copyTaskArr[currentTaskIndex] = updatedTask;
		setTaskArray(copyTaskArr);
		setIsUpdating(false);
	};

	return { isUpdating, requestUpdate, setIsUpdating };
};

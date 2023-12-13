import { useState } from "react";
export const useRequestUpdate = (refreshTodos, setRefreshTodos) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdate = (text, id) => {
		console.log(id);
		setRefreshTodos(!refreshTodos);
		setIsUpdating(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				value: text,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Данные  обновлены:", response);
				setRefreshTodos(!refreshTodos);
			})
			.finally(() => setIsUpdating(false));
	};

	return { isUpdating, requestUpdate, setIsUpdating };
};

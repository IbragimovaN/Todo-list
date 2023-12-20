import { useState } from "react";

export const useRequestAdd = (setRefreshTodos, refreshTodos) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAdd = (text, id) => {
		setIsCreating(true);

		fetch("http://localhost:3005/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				value: text,
				complete: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Задача добавлена, ответ сервера:", response);
				setRefreshTodos(!refreshTodos);
			})
			.finally(() => setIsCreating(false));
	};

	return { isCreating, requestAdd };
};

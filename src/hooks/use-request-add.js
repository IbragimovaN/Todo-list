import { useState } from "react";

export const useRequestAdd = () => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAdd = (taskValue) => {
		setIsCreating(true);

		fetch("http://localhost:3005/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				value: taskValue,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Задача добавлена, ответ сервера:", response);
			})
			.finally(() => setIsCreating(false));
	};

	return { isCreating, requestAdd };
};

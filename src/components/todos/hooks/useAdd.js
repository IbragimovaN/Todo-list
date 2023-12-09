import { useState } from "react";

export const useRequestAdd = () => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAdd = (value) => {
		setIsCreating(true);

		fetch("http://localhost:3005/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				name: value,
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

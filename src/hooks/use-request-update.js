import { useState } from "react";
export const useRequestUpdate = (
	refreshProducts,
	setRefreshProducts,
	id,
	taskValue,
) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdate = (text) => {
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
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsUpdating(false));
	};

	return { isUpdating, requestUpdate, setIsUpdating };
};

import { useState } from "react";

export const useRequestDeleting = (refreshTodos, setRefreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleting = (id) => {
		setIsDeleting(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setRefreshTodos(!refreshTodos);
			})
			.finally(() => setIsDeleting(false));
	};

	return { isDeleting, requestDeleting };
};

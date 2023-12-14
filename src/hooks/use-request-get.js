import { useEffect, useState } from "react";

export const useRequestGet = (refreshTodos) => {
	const [taskArray, setTaskArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("http://localhost:3005/todos")
			.then((loadedData) => loadedData.json())
			.then((loadedTodo) => {
				setTaskArray(loadedTodo);
			})

			.finally(() => setIsLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshTodos]);

	return { taskArray, isLoading, setTaskArray };
};

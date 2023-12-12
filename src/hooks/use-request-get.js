import { useEffect, useState } from "react";

export const useRequestGet = (refreshTodos, id) => {
	const [taskArray, setTaskArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);

		fetch(`http://localhost:3005/todos/${id}`)
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setTaskArray(loadedProducts);
			})
			.finally(() => setIsLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshTodos]);

	return { taskArray, isLoading };
};

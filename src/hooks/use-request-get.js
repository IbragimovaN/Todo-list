import { useEffect, useState } from "react";

export const useRequestGet = (refreshTodos) => {
	const [taskArray, setTaskArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);

		fetch("http://localhost:3005/todos")
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setTaskArray(loadedProducts);
				// console.log(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodos]);
	// console.log(taskArray);
	return { taskArray, isLoading };
};

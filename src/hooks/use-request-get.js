import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGet = () => {
	const [taskArray, setTaskArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const todosDbRef = ref(db, "todos");
		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val() || {};
			setTaskArray(loadedTodos);
			setIsLoading(false);
		});
	}, []);

	return { taskArray, isLoading, setTaskArray };
};

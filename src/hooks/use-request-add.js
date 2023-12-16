import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useRequestAdd = () => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAdd = (text, id) => {
		setIsCreating(true);
		const todosDbRef = ref(db, "todos");
		push(todosDbRef, {
			value: text,
		})
			.then((response) => {
				console.log("Задача добавлена:", response);
			})
			.finally(() => setIsCreating(false));
	};

	return { isCreating, requestAdd };
};

// export const useRequestAdd = (setRefreshTodos, refreshTodos) => {
// 	const [isCreating, setIsCreating] = useState(false);

// 	const requestAdd = (text, id) => {
// 		setIsCreating(true);

// 		fetch("http://localhost:3005/todos", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json;charset=utf-8" },
// 			body: JSON.stringify({
// 				value: text,
// 			}),
// 		})
// 			.then((rawResponse) => rawResponse.json())
// 			.then((response) => {
// 				console.log("Задача добавлена, ответ сервера:", response);
// 				setRefreshTodos(!refreshTodos);
// 			})
// 			.finally(() => setIsCreating(false));
// 	};

// 	return { isCreating, requestAdd };
// };

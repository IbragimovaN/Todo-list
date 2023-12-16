import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useRequestDeleting = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleting = (id) => {
		setIsDeleting(true);
		console.log(id);
		const currentTodoDbRef = ref(db, `todos/${id}`);

		remove(currentTodoDbRef)
			.then((response) => {
				console.log("Задача удалена:", response);
			})
			.finally(() => setIsDeleting(false));
	};

	return { isDeleting, requestDeleting };
};

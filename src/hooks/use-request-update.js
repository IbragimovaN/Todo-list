import { useState } from "react";

import { ref, set } from "firebase/database";
import { db } from "../firebase";
export const useRequestUpdate = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdate = (inputText, id) => {
		setIsUpdating(true);
		console.log(id);
		const currentTaskDbRef = ref(db, `todos/${id}`);
		console.log(currentTaskDbRef);
		set(currentTaskDbRef, {
			value: inputText,
		})
			.then((response) => {
				console.log("Данные  обновлены:", response);
			})
			.finally(() => setIsUpdating(false));
	};

	return { isUpdating, requestUpdate };
};

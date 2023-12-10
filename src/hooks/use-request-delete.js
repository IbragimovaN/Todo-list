import { useState } from "react";

export const useRequestDeleting = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleting = (id) => {
		setIsDeleting(true);
		fetch(`http://localhost:3005/products}/${id}`, {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Задача удалена:", response);
			})
			.finally(() => setIsDeleting(false));
	};

	return { isDeleting, requestDeleting };
};

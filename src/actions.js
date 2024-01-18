import { readTodos } from "./api/api";

export const changeTodos = () => {
	return (dispatch) => {
		return readTodos().then((loadedTodos) => {
			dispatch({
				type: "SET_TODOS",
				payload: loadedTodos,
			});
		});
	};
};

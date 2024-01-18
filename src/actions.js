import { readTodos } from "./api/api";

export const changeTodos = (arg2, arg3) => {
	return (dispatch) => {
		return readTodos(arg2, arg3).then((loadedTodos) => {
			dispatch({
				type: "SET_TODOS",
				payload: loadedTodos,
			});
		});
	};
};

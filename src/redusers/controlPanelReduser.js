const initialState = {
	searchPhrase: "",
	isAlphabetSorting: false,
	refreshTodos: true,
};

export const controlPanelReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_SEARCH_PHRASE": {
			return {
				...state,
				searchPhrase: payload,
			};
		}
		case "SET_SORTING": {
			return {
				...state,
				isAlphabetSorting: payload,
			};
		}
		case "SET_REFRESH_TODOS": {
			return {
				...state,
				refreshTodos: !state.refreshTodos,
			};
		}

		default:
			return state;
	}
};

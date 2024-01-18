const initialState = {
	searchPhrase: "",
	isAlphabetSorting: false,
	refreshTodos: true,
	textNewTask: "",
	searchInputvalue: "",
	isEnabled: false,
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
		case "SET_TEXT_NEW_TASK": {
			return {
				...state,
				textNewTask: payload,
			};
		}
		case "SET_SEARCH_INPUT_VALUE": {
			return {
				...state,
				searchInputvalue: payload,
			};
		}
		case "SET_IS_ENABLED": {
			return {
				...state,
				isEnabled: payload,
			};
		}

		default:
			return state;
	}
};

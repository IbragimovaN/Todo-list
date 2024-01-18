const initialState = {
	inputText: "",
	isOpenInput: false,
};

export const todoFieldReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_IS_OPEN_INPUT": {
			return {
				...state,
				isOpenInput: payload,
			};
		}
		case "SET_INPUT_TEXT": {
			return {
				...state,
				inputText: payload,
			};
		}

		default:
			return state;
	}
};

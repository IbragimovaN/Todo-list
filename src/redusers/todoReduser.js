const initialState = [
	{
		id: "",
		title: "",
		completed: false,
	},
];

export const todoReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_TODOS": {
			return payload;
		}

		default:
			return state;
	}
};

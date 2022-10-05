export const searchIntialState = {
	searchQuery: null,
};

export const searchInitializer = () =>  {
	return {
		searchQuery: null,
	}
};

export const searchReducer = (state, action) => {
	switch (action.type) {
		case "SEARCH":
			return {
				 searchQuery: action.payload,
			};
		default:
			return state;
	}
};
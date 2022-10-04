export const sortIntialState = {
	moviesGenre: null,
	moviesSort: null,
};

export const sortInitializer = () => {
	return {
		moviesGenre: null,
		moviesSort: null,
	};
};

export const sortReducer = (state, action) => {
	switch (action.type) {
		case "GENRE":
			return {
				...state, moviesGenre: action.payload,
			};
		case "SORT":
			return {
				...state, moviesSort: action.payload,
			};
		default:
			return state;
	}
};
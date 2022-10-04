export const sortIntialState = {
	moviesGenre: 'none',
	moviesSort: 'none',
};

export const sortInitializer = () => {
	return {
		moviesGenre: 'none',
		moviesSort: 'none',
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
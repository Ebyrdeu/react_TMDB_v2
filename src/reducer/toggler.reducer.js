


export const togglerIntialState = {
	showListType: 1
}

export const togglerInitializer = () => {
	return {
		showListType: 1
	}
}

export const togglerReducer = (state, action) => {
	switch (action.type) {
		case 'BIG_GRID': return {
			...state, showListType: 1
		}
		case 'MEDIUM_GRID': return {
			...state, showListType: 2
		}
		case 'SMALL_GRID': return {
			...state, showListType: 3
		}
		default: return state
	}
}
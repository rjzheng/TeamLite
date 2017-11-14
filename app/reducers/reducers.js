/* Actions */
// Import Actions
import {
	ADD_BOOKMARK,
	REMOVE_BOOKMARK
} from 'actions';


// Initial state params
const GLOBAL_STATE = {
	globalVar: [],
 	bookmarkedArticles: []
};

export var globalReducer = (state=GLOBAL_STATE, action) => {
	switch(action.type) {
		case ADD_BOOKMARK: {
			return {
				...state,
				bookmarkedArticles: [...state.bookmarkedArticles, action.payload]
			}
		}
		case REMOVE_BOOKMARK: {
			return {
				...state,
				bookmarkedArticles: state.bookmarkedArticles.filter((article) => {
					article.title != action.payload.title
				})
			}
		}
		default:
			return state;
	}
};

import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	{
		const { type, payload } = action;

		switch (type) {
			case 'add_blogpost':
				return [
					...state,
					{
						id: Math.floor(Math.random() * 999999999999999),
						title: `Blog Post #${state.length + 1}`,
					},
				];
			case 'show_post':
				return state.filter((blog) => blog.id === payload);
			case 'delete_blogpost':
				return state.filter((blog) => blog.id !== payload);
			default:
				return state;
		}
	}
};

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({
			type: 'add_blogpost',
		});
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({
			type: 'delete_blogpost',
			payload: id,
		});
	};
};

const getPost = (dispatch) => {
	return (id) => {
		dispatch({
			type: 'show_post',
			payload: id,
		});
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, getPost },
	[]
);

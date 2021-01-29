import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
	{
		const { type, payload } = action;

		switch (type) {
			case 'get_blogposts':
				return payload;
			case 'add_blogpost':
				return [
					...state,
					{
						id: Math.floor(Math.random() * 999999999999999),
						title: payload.title,
						content: payload.content,
					},
				];
			case 'show_post':
				return state.filter((blog) => blog.id === payload);
			case 'delete_blogpost':
				return state.filter((blog) => blog.id !== payload);
			case 'edit_blogpost':
				return state.map((post) => {
					return post.id === payload.id ? payload : post;
				});
			default:
				return state;
		}
	}
};

const getBlogPosts = (dispatch) => {
	return async () => {
		try {
			const res = await jsonServer.get('/blogposts');

			dispatch({
				type: 'get_blogposts',
				payload: res.data,
			});
		} catch (err) {}
	};
};

const addBlogPost = (dispatch) => {
	return (title, content, callBack) => {
		dispatch({
			type: 'add_blogpost',
			payload: {
				title,
				content,
			},
		});
		if (callBack) {
			callBack();
		}
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

const editBlogPost = (dispatch) => {
	return (id, title, content, callBack) => {
		dispatch({
			type: 'edit_blogpost',
			payload: {
				id,
				title,
				content,
			},
		});
		if (callBack) {
			callBack();
		}
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
	{ addBlogPost, deleteBlogPost, getPost, editBlogPost, getBlogPosts },
	[]
);

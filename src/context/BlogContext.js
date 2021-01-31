import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
	{
		const { type, payload } = action;

		switch (type) {
			case 'get_blogposts':
				return payload;
			case 'add_blogpost':
				return [...state, payload];
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
	return async (title, content, callBack) => {
		try {
			const res = await jsonServer.post('/blogposts', { title, content });
			dispatch({
				type: 'add_blogpost',
				payload: res.data,
			});
		} catch (err) {}
		if (callBack) {
			callBack();
		}
	};
};

const deleteBlogPost = (dispatch) => {
	return async (id) => {
		const res = await jsonServer.delete(`blogposts/${id}`);
		dispatch({
			type: 'delete_blogpost',
			payload: id,
		});
	};
};

const editBlogPost = (dispatch) => {
	return async (id, title, content, callBack) => {
		await jsonServer.put(`/${id}`, { title, content });
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

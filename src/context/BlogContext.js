import React from 'react';
import { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
	{
		const { type, payload } = action;

		switch (type) {
			case 'add_blogpost':
				return [...state, { title: `Blog Post #${state.length + 1}` }];
			default:
				return state;
		}
	}
};

export const BlogProvider = ({ children }) => {
	const [state, dispatch] = useReducer(blogReducer, []);

	const addBlogPost = () => {
		dispatch({
			type: 'add_blogpost',
		});
	};

	return (
		<BlogContext.Provider value={{ data: state, addBlogPost }}>
			{children}
		</BlogContext.Provider>
	);
};

export default BlogContext;

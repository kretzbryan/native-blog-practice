import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state, editBlogPost } = useContext(Context);
	const post = state.find((post) => post.id === id);

	return (
		<BlogPostForm
			initialValues={{ title: post.title, content: post.content }}
			onSubmit={(title, content) => editBlogPost(id, title, content)}
		/>
	);
};
const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10,
		marginHorizontal: 5,
	},
	label: {
		fontSize: 20,
		marginVertical: 5,
		marginLeft: 5,
	},
});
export default EditScreen;

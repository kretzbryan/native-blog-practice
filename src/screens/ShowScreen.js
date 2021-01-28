import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state, getPost } = useContext(Context);
	const post = state[0];
	useEffect(() => {
		getPost(id);
	}, []);

	return (
		<View>
			<Text>This is a show page for {post.id}</Text>
		</View>
	);
};
const styles = StyleSheet.create({});
export default ShowScreen;

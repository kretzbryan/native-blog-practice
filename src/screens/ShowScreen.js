import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state } = useContext(Context);
	const post = state.find((post) => post.id === id);

	return (
		<View>
			<Text>This is a show page for {post.title}</Text>
			<Text> {post.content}</Text>
		</View>
	);
};
const styles = StyleSheet.create({});
export default ShowScreen;

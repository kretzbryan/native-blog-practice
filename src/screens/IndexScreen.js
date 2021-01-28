import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
	const { data, addBlogPost } = useContext(BlogContext);
	return (
		<View>
			<Text>This is an index Screen</Text>
			<Button title='Add Post' onPress={() => addBlogPost()} />
			<FlatList
				data={data}
				keyExtractor={(post) => post.title}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</View>
	);
};
const styles = StyleSheet.create({});

export default IndexScreen;

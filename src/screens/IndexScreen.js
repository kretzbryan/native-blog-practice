import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context);
	return (
		<View>
			<Text>This is an index Screen</Text>
			<Button title='Add Post' onPress={() => addBlogPost()} />
			<FlatList
				data={state}
				keyExtractor={(post) => post.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.titleStyle}>{item.title}</Text>
							<Feather style={styles.iconStyle} name='trash' />
						</View>
					);
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		borderTopWidth: 1,
		paddingHorizontal: 10,
	},
	titleStyle: {
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 24,
	},
});

export default IndexScreen;

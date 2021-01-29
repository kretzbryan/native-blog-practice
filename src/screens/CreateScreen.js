import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextComponent,
	TextInput,
	Button,
} from 'react-native';
import { useContext } from 'react/cjs/react.development';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlogPost } = useContext(Context);

	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button
				title='Add Blog Post'
				onPress={() =>
					addBlogPost(title, content, () => {
						navigation.navigate('Index');
					})
				}
			/>
		</View>
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

export default CreateScreen;
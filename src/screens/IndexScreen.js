import React, { useContext } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost } = useContext(Context);
	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(post) => post.id}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<TouchableOpacity
								onPress={() => navigation.navigate('Show', { id: item.id })}>
								<Text style={styles.titleStyle}>
									{item.title} -- {item.id}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
								<Feather style={styles.iconStyle} name='trash' />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

// This adds navigation to the top right header of the Application
IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name='plus' size={30} />
			</TouchableOpacity>
		),
	};
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

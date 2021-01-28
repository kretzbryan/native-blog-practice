import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
// import React from 'react';

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			title: 'Blog',
		},
	}
);

const App = createAppContainer(navigator);

export default () => (
	<Provider>
		<App />
	</Provider>
);

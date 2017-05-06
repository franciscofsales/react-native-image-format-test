/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image
} from 'react-native';

export default class imageTest extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.scrollview}>
					<Text>JPG</Text>
					<Image source={require('./images/test.jpg')} style={styles.image} />
					<Text>JPEG</Text>
					<Image source={require('./images/test.jpeg')} style={styles.image} />
					<Text>PNG</Text>
					<Image source={require('./images/test.png')} style={styles.image} />
					<Text>BMP</Text>
					<Image source={require('./images/test.bmp')} style={styles.image} />
					<Text>GIF</Text>
					<Image source={require('./images/test.gif')} style={styles.image} />
					<Text>PSD</Text>
					<Image source={require('./images/test.psd')} style={styles.image} />
					<Text>WEBP</Text>
					<Image source={require('./images/test.webp')} style={styles.image} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		justifyContent: 'center',
		alignItems: 'center'
	},
  scrollview: {
    marginTop: 15
  },
	image: {
		width: 75,
		height: 50
	}
});

AppRegistry.registerComponent('imageTest', () => imageTest);

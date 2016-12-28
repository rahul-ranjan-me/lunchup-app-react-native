import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	StyleSheet,
} from 'react-native';

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView scrollsToTop={false} style={styles.menu}>
				<Text onPress={() => this.props.onItemSelected('first')}
					style={styles.item}>
					First
				</Text>

				<Text
				onPress={() => this.props.onItemSelected('second')}
					style={styles.item}>
					Second
				</Text>

				<Text onPress={() => this.props.onItemSelected('third')}
					style={styles.item}>
					Third
				</Text>
			</ScrollView>
		);
	}

	static propTypes = {
		onItemSelected: React.PropTypes.func.isRequired,
	};
};

const styles = StyleSheet.create({
    menu: {
		flex: 1,
		width: window.width,
		height: window.height,
		padding: 20,
    },
    item: {
		fontSize: 16,
		fontWeight: '300',
		paddingTop: 20,
    },    
});
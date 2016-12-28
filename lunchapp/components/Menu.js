import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	StyleSheet,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import clrs from '../utils/Clrs';

const list = [
	{
		name: 'Setup a lunch',
		icon: 'av-timer',
		subtitle: 'Click to setup a new lunch',
		key: 'setup',
	},
	{
		name: 'Find partner',
		icon: 'find-in-page',
		subtitle: 'Search for a lunch partner',
		key: 'search',
	},
	{
		name: 'history',
		icon: 'history',
		subtitle: 'See lunches history',
		key: 'history',
	},
	{
		name: 'Rewards',
		icon: 'card-giftcard',
		subtitle: 'Check/Redeem your reward points',
		key: 'rewards',
	},
]


export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView scrollsToTop={false} style={styles.menu}>
				<List containerStyle={{marginBottom: 20}}>
				  {
				    list.map((l, i) => (
				      <ListItem
				        leftIcon={{name: l.icon}}
				        onPress={() => this.props.onItemSelected(l.key)}
				        key={i}
				        title={l.name}
				      />
				    ))
				  }
				</List>
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
		paddingTop: 20,
		backgroundColor: clrs.lightPrimaryColor
    },
    item: {
		fontSize: 16,
		fontWeight: '300',
	},    
});
import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
} from 'react-native';
import { List, ListItem, Icon, SocialIcon } from 'react-native-elements';

import clrs from '../utils/Clrs';

const list = [
	{
		name: 'Home',
		icon: 'home',
		subtitle: 'Your sweet home',
		key: 'home',
	},
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
				<View style={styles.appTitleView}>
					<Icon
					  name='handshake-o'
					  type='font-awesome'
					  color='#fff' />
					<Text style={styles.appTitle}>Lunchup</Text>
				</View>
				<List containerStyle={{ marginTop:36, backgroundColor:clrs.textPrimaryColor}}>
				  {
				    list.map((l, i) => (
				      <ListItem
				        leftIcon={{name: l.icon}}
				        onPress={() => this.props.onItemSelected(l.key)}
				        key={i}
				        title={l.name}
				        subtitle={l.subtitle}

				      />
				    ))
				  }
				</List>

				<View style={styles.socialLinks}>
					<SocialIcon type='twitter' />
					<SocialIcon type='facebook' />
					<SocialIcon type='gitlab' />
				</View>

				<View style={styles.badgeContainer}>
					<Text style={{fontSize:15, marginLeft:35}}>You got bronze badge</Text>
					<Icon
					  name='sheriff-badge'
					  type='foundation'
					  color='#CD7F32'
					  size={70}
					  iconStyle={{margin:5}} />
					<Text style={{fontSize:15, marginLeft:35, alignSelf:'center', flex:1}}>You need 200 points for silver badge</Text>
				</View>
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
		backgroundColor: clrs.darkPrimaryColor,
		paddingTop:5
    },
    item: {
		fontSize: 16,
		fontWeight: '300',
	},
	appTitleView:{
		position:'absolute',
		left:60,
		flex:1,
		flexDirection:'row'
	},
	appTitle:{
		fontSize:20,
		marginLeft:10,
		color:clrs.textPrimaryColor
	},
	socialLinks:{
		flexDirection: 'row',
		backgroundColor : clrs.textPrimaryColor,
		justifyContent: 'center',
		marginTop: -1
	},
	badgeContainer: {
		backgroundColor : clrs.textPrimaryColor,
		margin:5,
		justifyContent: 'center',
		width:230,
		paddingTop:5,
		paddingBottom:3
	}
});
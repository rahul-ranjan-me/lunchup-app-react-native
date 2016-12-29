import React, {Component} from 'react';
import {
	View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Menu from './Menu';
import SideMenu from 'react-native-side-menu';
import { Icon } from 'react-native-elements'
import clrs from '../utils/Clrs';

export default class PageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,      
            selectedItem: item,
        });
        this.props.navigator.replace({ id: item });
    }

    render() {

        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;
        return (
            <SideMenu
              menu={menu}
              isOpen={this.state.isOpen}
              onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton onPress={() => this.toggle()}/>
                {this.props.children}
            </SideMenu>
        );
    }
};

class MenuButton extends Component {
	handlePress(e) {
		if (this.props.onPress) {
		this.props.onPress(e);
		}
	}

	render() {
		return (
			<View style={styles.menuButton}>
                <TouchableOpacity 
                    onPress={this.handlePress.bind(this)}
                    style={this.props.style}>

                        {this.props.children}

                        <Icon
                        name='bars'
                        type='font-awesome'
                        style={styles.hamberger}
                        size = {40}
                        color='#000' />                        

                </TouchableOpacity>      
			</View>
		);
	}
}

const styles = StyleSheet.create({
    menuButton: {
        backgroundColor: clrs.darkPrimaryColor,
        width:40
    },
});
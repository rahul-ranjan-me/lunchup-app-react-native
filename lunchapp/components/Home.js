import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import clrs from '../utils/Clrs';
import SearchPartner from './SearchPartner';
import SetupLunch from './SetupLunch';

export default class Home extends Component {
    constructor(props){
        super(props);
        // <SearchPartner navigator={this.props.navigator}/>
    }

    render() {
        return (
            <View style={styles.page}>
                <SetupLunch navigator={this.props.navigator} />
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: clrs.textPrimaryColor
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
        color: clrs.primaryText
    },
});
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import clrs from '../utils/Clrs';
import SearchPartner from './SearchPartner';

export default class Home extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.pageContent}>Home Page</Text>
                <SearchPartner navigator={this.props.navigator}/>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: clrs.textPrimaryColor
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
        color: clrs.primaryText
    },
});
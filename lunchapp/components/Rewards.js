import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import clrs from '../utils/Clrs';

export default class Rewards extends Component {
    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.pageContent}>Rewards Page</Text>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: clrs.primaryColor
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
        color: clrs.primaryText
    },
});
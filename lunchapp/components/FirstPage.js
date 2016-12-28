import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

export default class FirstPage extends Component {
    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.pageContent}>First Page</Text>
            </View>
        );    
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
    },
});
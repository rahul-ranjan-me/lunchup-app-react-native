import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
    ScrollView,
} from 'react-native';
import clrs from '../utils/Clrs';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements';

export default class ExpressInvite extends Component {
    constructor(props){
        super(props);
    }

    onClose(){
        this.props.navigator.replace({ id: 'search' });
    }

    onExpressInterest(){
        alert('Your interest has expressed');
        this.props.navigator.replace({ id: 'search' });
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.pageHeadingContainer}>
                    <Text style={styles.pageHeading}>Express your invite</Text>
                    <View style={{alignItems:'flex-end', justifyContent:'flex-end', flex:1, flexDirection:'row',}}>
                        <Icon
                          name='times'
                          type='font-awesome'
                          color={clrs.textPrimaryColor}
                          size= {30}
                          iconStyle={{marginTop:5, marginRight:10, flex:1}}
                          onPress={() => this.onClose()}
                        />
                    </View>
                </View>

                <FormLabel>Any Comment</FormLabel>
                <FormInput textInputRef="comment" />

                <FormLabel>Propose new time:</FormLabel>
                <FormInput textInputRef="newTime" />

                <Button
                      icon={{name: 'envira', type: 'font-awesome'}}
                      buttonStyle = {styles.inviteButton}
                      title="Express interest"
                      onPress={() => this.onExpressInterest()} />

            </View>
        );    
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: clrs.textPrimaryColor
    },
    pageHeadingContainer:{
        backgroundColor: clrs.primaryColor,
        flexDirection:'row'
    },
    pageHeading:{
        padding:10,
        fontSize:18,
        fontWeight:'bold',
        color:clrs.textPrimaryColor
    },
    pageContent: {
        flex: 1,
        backgroundColor: clrs.lightPrimaryColor,
        padding:5,
    },
    inviteButton:{
        backgroundColor: clrs.primaryColor,
        marginTop:15
    },
});
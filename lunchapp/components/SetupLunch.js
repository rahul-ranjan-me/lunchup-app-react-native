import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
    ScrollView,
    Picker,
} from 'react-native';
import clrs from '../utils/Clrs';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { type, countries } from '../utils/setupLunch';


export default class SetupLunch extends Component {
    constructor(props){
        super(props);
        this.state = {date:new Date(), location: 'IN', lunchType: 'lunch'}
    }

    onSetupLunch(){
        alert('Your lunch has been setup with following details: \nLunch type: '+this.state.lunchType+'\n'+
            'Location: '+this.refs.locationInput.refs.location._lastNativeText+'\n'+
            'Disucssion topic: '+this.refs.topicInput.refs.discussionTopic._lastNativeText+'\n'+
            'Location: '+this.state.date);
        this.props.navigator.replace({ id: 'search' });
    }

    render() {
        return (
            <View style={styles.pageContainer}>
                <ScrollView>
                    <Text style={styles.pageHeading}>Setup your lunch invite</Text>

                    <View style={styles.page}>
                        <FormLabel>Lunch type</FormLabel>
                        
                        <View style={styles.pickerContainer}>
                            <Picker
                              selectedValue={this.state.lunchType}
                              onValueChange={(type) => this.setState({lunchType: type})}
                              style={styles.pickerStyle}>
                              {type.map((item, i) => (
                                  <Picker.Item label={item.label} key={i} style={styles.pickerItem} value={item.value} />
                              ))}
                            </Picker>
                        </View>

                        <FormLabel>Location:</FormLabel>
                        <FormInput ref='locationInput' textInputRef="location" />

                        <FormLabel>Discussion topic:</FormLabel>
                        <FormInput ref='topicInput' textInputRef="discussionTopic" />

                        <FormLabel>Time:</FormLabel>
                        <View style={styles.calendarContainer}>
                            <DatePicker
                                style={styles.calendarStyle}
                                date={this.state.date}
                                mode="datetime"
                                placeholder="select date"
                                format="YYYY-MM-DD HH:mm"
                                minDate={this.state.date}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles = {{
                                    dateInput: {
                                        marginLeft: 6,
                                        marginTop: 20,
                                    }
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </View>

                        <Button
                              icon={{name: 'envira', type: 'font-awesome'}}
                              buttonStyle = {styles.inviteButton}
                              title="Setup lunch"
                              onPress={() => this.onSetupLunch()} />
                    </View>                    
                </ScrollView>

            </View>
        );    
  }
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: clrs.textPrimaryColor
    },
    page: {
        backgroundColor: clrs.textPrimaryColor,
        paddingTop:15
    },
    pageHeading:{
        fontSize:22,
        color: clrs.black,
        alignSelf : 'center',
        marginTop:20
    },
    pickerContainer:{
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#bdc6cf',
        borderBottomWidth: 1,
    },
    pickerStyle:{
        color: '#86939e',
    },
    pickerItem:{
        color: '#86939e',
        fontSize: 12
    },
    calendarContainer:{
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#bdc6cf',
        borderBottomWidth: 1,
        marginBottom:15
    },
    calendarStyle:{
        height: 36,
    }
});
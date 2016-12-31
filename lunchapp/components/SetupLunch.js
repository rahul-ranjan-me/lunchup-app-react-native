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
        this.state = {date:new Date()}
    }

    onSetupLunch(){
        alert('Your lunch has been setup with following details: \nLunch type: '+this.state.lunchType+'\n'+
            'Location: '+this.state.location+'\n'+
            'Disucssion topic: '+this.refs.forminput.refs.discussionTopic._lastNativeText+'\n'+
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
                        <View style={styles.pickerContainer}>
                            <Picker
                              selectedValue={this.state.location}
                              onValueChange={(type) => this.setState({location: type})}
                              style={styles.pickerStyle}>
                              {countries.map((item, i) => (
                                  <Picker.Item label={item.name} key={i} style={styles.pickerItem} value={item.code} />
                              ))}
                            </Picker>
                        </View>

                        <FormLabel>Discussion topic:</FormLabel>
                        <FormInput ref='forminput' textInputRef="discussionTopic" />

                        <FormLabel>Time:</FormLabel>
                        <View style={styles.calendarContainer}>
                            <DatePicker
                                style={styles.calendarStyle}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate={this.state.date}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
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
        height: 36,
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
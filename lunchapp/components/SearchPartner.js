import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import clrs from '../utils/Clrs';
import Swiper from 'react-native-swiper';
import availableLunches from '../utils/searchLunch';

const {height, width} = Dimensions.get('window');

export default class SearchPartner extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <Swiper style={styles.wrapper}>
                {availableLunches.map((item, i) => (
                  <SlideItem item={item} key={i} navigator={this.props.navigator} />
                ))}
            </Swiper>
        );    
    }
};

export class SlideItem extends Component{
    constructor(props){
        super(props);
    }

    onExpressInvite = (item) => {
        this.props.navigator.replace({ id: item });
    }

    render(){
        const item = this.props.item,
            btnText = `Invite ${item.foreName}`;
        return(
            <View style={styles.slide}>
                <Image source={{uri:item.imageUrl}} style={styles.backgroundImage} />
                <View style={styles.userDetails}>

                    <View style={{flexDirection:'row',}}>
                        <Text style={styles.text}>{item.foreName} {item.lastName}</Text>
                        <View style={{alignItems:'flex-end', justifyContent:'flex-end', flex:1, flexDirection:'row'}}>
                            <Icon
                              name='map-marker'
                              type='font-awesome'
                              color='#517fa4'
                            />
                            <Text style={{marginLeft:5,  color:clrs.black, fontSize:17}}>{item.location}</Text>
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={{color:clrs.primaryText}}>{item.bio}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>My hobbies are: </Text>
                        <Text style={styles.info}>{item.hobbies}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Intersted in: </Text>
                        <Text style={styles.info}>{item.interestedIn}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Let's lunch at: </Text>
                        <Text style={styles.info}>{item.meetingTime}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>We will discuss: </Text>
                        <Text style={styles.info}>{item.discussionTopic}</Text>
                    </View>

                    <Button
                      icon={{name: 'envira', type: 'font-awesome'}}
                      buttonStyle = {styles.inviteButton}
                      onPress={() => this.onExpressInvite('expressInvite')}
                      title={btnText} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },

    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    backgroundImage: {
        resizeMode: 'cover', // or 'stretch',
        width:width,
        height:null,
        flex:1,
    },
    userDetails:{
        justifyContent: 'flex-start',
        position:'absolute',
        bottom:0,
        zIndex:5,
        padding:10,
        backgroundColor:"rgba(255,255,255,.5)",
        width:width,
        height:360,
    },
    text: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inviteButton:{
        backgroundColor: clrs.primaryColor,
        marginTop:15
    },
    infoContainer:{
        flexDirection:'row',
        marginBottom:10
    },
    infoLabel:{
        color: clrs.primaryText,
        fontWeight: 'bold',
    },
    info:{
        color: clrs.primaryText
    },
});
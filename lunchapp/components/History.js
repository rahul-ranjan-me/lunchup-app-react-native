import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
    ScrollView,
    Image,
    ListView,
    Dimensions,
} from 'react-native';
import clrs from '../utils/Clrs';
import history from '../utils/history';

const {height, width} = Dimensions.get('window');

export default class History extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(history),
        };
    };

    render() {
        return (
            <View style={styles.pageContainer}>
                <ScrollView>
                    <Text style={styles.pageHeading}>Your lunchup history</Text>
                    <View style={styles.page}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(item) => <ShowHistory item={item} />}
                          />
                    </View>
                </ScrollView>
            </View>
        );    
    }
}

class ShowHistory extends Component{

    render(){
        const item = this.props.item;
        return(
            <View style={styles.historyContainer}>
                <Text style={styles.timeStick}></Text>

                <View style={{marginTop:-50}}>
                    <Image source={{uri:item.imageUrl}} style={styles.backgroundImage} />
                    
                    <View style={styles.lunchDetails}>
                        <Text style={styles.pageContent}>{item.lunchWith}</Text>

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>You meet on: </Text>
                            <Text style={styles.pageContent}>{item.meetingDate}, {item.meetingTime}</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>You discussed: </Text>
                            <Text style={styles.pageContent}>{item.discussionTopic}</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Your location: </Text>
                            <Text style={styles.pageContent}>{item.location}</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>You had: </Text>
                            <Text style={styles.pageContent}>{item.meetingType}</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        )
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
    historyContainer:{
        borderLeftWidth: 4,
        borderLeftColor: clrs.darkPrimaryColor,
        alignItems:'flex-start',
        marginLeft:15,
        flexDirection:'row',
        paddingTop:50,
        paddingBottom:15,
    },
    timeStick:{
        width:20,
        marginRight:20,
        height:5,
        borderBottomWidth: 4,
        borderBottomColor: clrs.lightPrimaryColor,
    },
    pageContent: {
        color: clrs.primaryText
    },
    backgroundImage: {
        resizeMode: 'cover', // or 'stretch',
        width: width-40,
        height:200,
        
    },
    lunchDetails: {
        justifyContent: 'flex-start',
        position:'absolute',
        bottom:0,
        zIndex:5,
        padding:10,
        backgroundColor:"rgba(255,255,255,.5)",        
    },
    infoContainer:{
        flexDirection:'row',
    },
    infoLabel:{
        color: clrs.primaryText,
        fontWeight: 'bold',
    },
    pageHeading:{
        fontSize:22,
        color: clrs.black,
        alignSelf : 'center',
        marginTop:20
    }
});
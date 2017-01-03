import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import clrs from '../utils/Clrs';
import SearchPartner from './SearchPartner';
import SetupLunch from './SetupLunch';
import { 
    Icon, 
    SocialIcon 
} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    onPageNavigate(page){
        this.props.navigator.replace({ id: page });
    }

    render() {
        return (
            <ScrollView style={styles.page}>
                <View>
                    <View style={styles.rewardBadge}>
                        <Icon
                          name='sheriff-badge'
                          type='foundation'
                          color='#CD7F32'
                          size={40}
                          onPress={() => this.onPageNavigate('rewards')}
                          iconStyle={{margin:5}} />
                          <Text  onPress={() => this.onPageNavigate('rewards')}
                            style={{fontSize:15, alignSelf:'center', flex:1, color: clrs.textPrimaryColor, marginLeft:10}}>200 points for silver badge</Text>
                    </View>

                    <View style={styles.showActions}>
                        <LinearGradient 
                            colors={['#4c669f', '#3b5998', '#192f6a']} 
                            style={styles.setUpLunch}>
                            <Icon
                              name='clock-o'
                              type='font-awesome'
                              color='#fff'
                              size={40}
                              onPress={() => this.onPageNavigate('setup')}
                              iconStyle={{margin:5}} />
                            <Text 
                                onPress={() => this.onPageNavigate('setup')}
                                style={{color:'#fff', fontSize:15}}>Setup Lunch</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#03A9F4', '#03A9F4', '#0288D1']} style={styles.searchPartner}>
                            <Icon
                              name='search'
                              type='font-awesome'
                              color='#fff'
                              size={40}
                              onPress={() => this.onPageNavigate('search')}
                              iconStyle={{margin:5}} />
                            <Text 
                                onPress={() => this.onPageNavigate('search')}
                                style={{color:'#fff', fontSize:15}}>Search Partner</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#448AFF', '#3F51B5', '#303F9F']} style={styles.yourInvitations}>
                            <Icon
                              name='envelope-open-o'
                              type='font-awesome'
                              color='#fff'
                              size={40}
                              onPress={() => this.onPageNavigate('invitation')}
                              iconStyle={{margin:5}} />
                            <Text 
                                onPress={() => this.onPageNavigate('invitation')}
                                style={{color:'#fff', fontSize:15}}>Your invitations</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles.blocksOpenInvitation}>
                        <Text 
                            onPress={() => this.onPageNavigate('invitation')}
                            style={styles.blockHeading}>Open invitations:</Text>
                        <Swiper height={50} showsPagination={false} style={{padding:5, height:50, marginLeft:5}}>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c2.staticflickr.com/7/6031/6263774505_9e0a7df01e_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>Lunch invite from Monica at Cybercity on 12th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c2.staticflickr.com/5/4100/4997575585_42d7d48ff3_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>Lunch invite from Anzela at Ancient on 15th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c1.staticflickr.com/4/3754/13888965536_76a7cd9901_c.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>Lunch invite from Anny at Cybercity on 2th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c2.staticflickr.com/5/4043/4683505897_c004d688f7_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>Lunch invite from Reeta at Unitech on 12th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c6.staticflickr.com/2/1338/5116201789_570b05395e_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>Lunch invite from Samantha at Infospace on 12th Dec.</Text>
                            </View>
                        </Swiper>
                    </View>

                    <View style={styles.blocksRecentActivity}>
                        <Text 
                            onPress={() => this.onPageNavigate('history')}
                            style={styles.blockHeading}>Recent Activity</Text>
                        <Swiper 
                            height={50} showsPagination={false} style={{padding:5, height:50, marginLeft:5}}>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c2.staticflickr.com/7/6031/6263774505_9e0a7df01e_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>You had lunch with Monica at Cybercity on 12th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c2.staticflickr.com/5/4100/4997575585_42d7d48ff3_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>You had lunch with Anzela at Ancient on 15th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c1.staticflickr.com/4/3754/13888965536_76a7cd9901_c.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>You had lunch with Anny at Cybercity on 2th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c2.staticflickr.com/5/4043/4683505897_c004d688f7_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>You had lunch with Reeta at Unitech on 12th Dec.</Text>
                            </View>
                            <View style={styles.recentActivityItem}>
                                <Image source={{uri:"http://c6.staticflickr.com/2/1338/5116201789_570b05395e_b.jpg"}} style={styles.thumbnails} />
                                <Text sytle={styles.itemDescription}>You had lunch with Samantha at Infospace on 12th Dec.</Text>
                            </View>
                        </Swiper>
                    </View>

                    <View style={styles.blocks}>
                        <Text style={styles.blockHeading}>You can follow us on:</Text>
                        <View style={{flexDirection:'row', alignItems:'stretch'}}>
                            <SocialIcon type='twitter' iconSize={40} style = {{marginTop:10, marginLeft:15, width:100,}}/>
                            <SocialIcon type='facebook' iconSize={40} style = {{marginTop:10, width:100,}} />
                            <SocialIcon type='gitlab' iconSize={40} style = {{ marginTop:10, width:100,}} />
                        </View>
                    </View>

                    <View style={styles.blocksSettings}>
                        <View style={styles.showActions}>
                            <View style={styles.setupBottomActions}>
                                <Icon
                                  name='cog'
                                  type='font-awesome'
                                  color='#fff'
                                  size={40}
                                  iconStyle={{margin:5}} />
                                <Text style={{color:'#fff', fontSize:15}}>Settings</Text>
                            </View> 
                            <View style={styles.setupBottomActions}>
                                <Icon
                                  name='id-card-o'
                                  type='font-awesome'
                                  color='#fff'
                                  size={40}
                                  iconStyle={{margin:5}} />
                                <Text style={{color:'#fff', fontSize:15}}>About us</Text>
                            </View> 
                            <View style={styles.setupBottomActions}>
                                <Icon
                                  name='beer'
                                  type='font-awesome'
                                  color='#fff'
                                  size={40}
                                  iconStyle={{margin:5}} />
                                <Text style={{color:'#fff', fontSize:15}}>Contact us</Text>
                            </View>                           
                        </View>
                    </View>

                    <View style={styles.blockCopy}>
                        <Text style={styles.blockHeading}>&copy; All rights reserved</Text>
                    </View>
                </View>
            </ScrollView>
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
    rewardBadge: {
        flexDirection:'row',
        backgroundColor: clrs.accentColor,
        paddingLeft:5,
        marginTop:5
    },

    showActions: {
        flexDirection:'row',
        alignItems:'stretch',
        marginTop:5
    },
    setUpLunch: {
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        height: 100,
        marginRight:5,
    },
    searchPartner: {
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        height: 100,
        marginRight:5,
    },
    yourInvitations: {
        alignItems:'center',
        justifyContent:'center',
        flex:1 ,
        height: 100,
    },
    blocks:{
        height:100,
        marginTop:5,
        backgroundColor: clrs.primaryColor,
    },
    blocksRecentActivity: {
        marginTop:5,
        backgroundColor: clrs.primaryColor,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5
    },
    blockHeading: {
        color:'#fff', 
        fontSize:15, 
        marginLeft:5, 
        marginTop:5, 
        fontWeight:'bold',
    },
    thumbnails:{
        width:50,
        height:50,
        marginRight:10,
    },
    recentActivityItem:{
        flexDirection:'row',
        backgroundColor:'rgba(255,255,255,.5)',
        alignItems:'center',
        marginTop:10,
        width:width-10
    },
    itemDescription:{
        
    },
    blocksOpenInvitation:{
        marginTop:5,
        backgroundColor: clrs.darkPrimaryColor,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5
    },
    blocksSettings:{
        marginTop:5,
        backgroundColor: clrs.primaryColor,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5
    },
    setupBottomActions: {
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        height: 80,
        marginRight:5,
        borderRightWidth:1,
        borderRightColor:clrs.darkPrimaryColor
    },
    blockCopy: {
        marginTop:5,
        backgroundColor: clrs.darkPrimaryColor,
        padding:5,
        height:48
    }
});
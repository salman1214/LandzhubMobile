import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Info from '../Info';
import Main from '../Main';
// import Notification from '../Notification';
import ContactUs from '../ContactUs';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import NavBarComponent from '../NavBarComponent';
import LoginPage from '../LoginPage'




const Tab = createBottomTabNavigator();

function TabNavigation(props) {

    return (
        <>
            <NavBarComponent navigation={props.navigation}/>
            <Tab.Navigator
                initialRouteName='Main'
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 20,
                        left: 15,
                        right: 15,
                        backgroundColor: 'white',
                        elevation: 0,
                        height: 60,
                        borderRadius: 10,
                        ...styles.shadow
                    }
                }}
            >
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image
                                    source={require('../../Media/home.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>
                        )
                    }}
                    name="Main"
                    component={Main}
                />
                <Tab.Screen
                    // listeners={() => {
                    //     setTitle('Information')
                    // }}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image
                                    source={require('../../Media/info.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>
                        )
                    }}
                    name="Info"
                    component={Info}
                />
                <Tab.Screen
                    // listeners={() => {
                    //     setTitle('Location')
                    // }}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image
                                    source={require('../../Media/contact-mail.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 35,
                                        height: 35
                                    }}
                                />
                            </View>
                        )
                    }}
                    name="Contact"
                    component={ContactUs}
                />
                <Tab.Screen
                    // listeners={() => {
                    //     setTitle('Notifications')
                    // }}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image
                                    source={require('../../Media/user.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>
                        )
                    }}
                    name="LoginPage"
                    component={LoginPage}
                />
            </Tab.Navigator>
        </>
    )

}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default TabNavigation
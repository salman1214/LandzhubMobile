import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen';
import LoginPage from '../LoginPage';
import DrawerNavigation from './DrawerNavigation';
import BuyLand from '../BuyLand';
import AddLand from '../AddLand';
import AddedLands from '../AddedLands';
import MapScreen from '../mapScreen/MapScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen' >


            <Stack.Screen options={{
                headerShown: false
            }} name="SplashScreen" component={SplashScreen} />


            <Stack.Screen options={{
                headerShown: false
            }} name="Drawer" component={DrawerNavigation} />


            <Stack.Screen options={{
                headerShown: false,
                title: 'Login',
                headerStyle: {
                    backgroundColor: '#B6F797',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            }} name="LoginPage" component={LoginPage} />

            <Stack.Screen options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#B6F797'
                },
                title: 'Buy Land'
            }} name="BuyLand" component={BuyLand} />

            <Stack.Screen options={{
                headerShown: true,
                title: 'Add Land',
                headerStyle: {
                    backgroundColor: '#B6F797'
                }
            }} name="AddLand" component={AddLand} />

            <Stack.Screen options={{
                headerShown: true,
                title: 'Your Lands',
                headerStyle: {
                    backgroundColor: '#B6F797'
                }
            }} name="AddedLands" component={AddedLands} />

            <Stack.Screen options={{
                headerShown: true,
                title: 'Calculate Your Land',
                headerStyle: {
                    backgroundColor: '#B6F797'
                }
            }} name="MapScreen" component={MapScreen} />

        </Stack.Navigator>
    )
}

export default StackNavigation
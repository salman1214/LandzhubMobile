import React, {useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import LoginPage from '../LoginPage';
import CustomDrawer from '../CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    const [title, setTitle] = useState('Home')

    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#B6F797',
                drawerActiveTintColor: 'black'
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
            >
            <Drawer.Screen name="Home" component={TabNavigation}/>
            <Drawer.Screen name="Login" component={LoginPage} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
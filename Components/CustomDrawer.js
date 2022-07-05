import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import {
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(226, 219, 204)' }}>
            <DrawerContentScrollView>
                <ImageBackground source={require('../Media/dr-img.jpg')} style={{ paddingHorizontal: 30, paddingVertical: 40, marginTop: -10 }}>
                    <Image source={require('../Media/avatar.png')} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }} />
                    <Text style={{ fontSize: 18 }}>M. Salman</Text>
                </ImageBackground>
                <View style={{paddingTop: 15}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{flexDirection: 'row', padding: 20}}>
                <Image source={require('../Media/settings.png')} style={{width: 20, height: 20}} />
                <Text style={{color: 'black', marginLeft: 10, fontSize: 18}}>Settings</Text>
            </View>
        </View>
    )
}

export default CustomDrawer
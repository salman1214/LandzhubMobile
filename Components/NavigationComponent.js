import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

function NavigationComponent() {
    return (
        <View style={styles.Navigate}>
            <View style={styles.Navigation}>
                <TouchableOpacity>
                    <Image style={styles.navIcon} source={require('../Media/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navIcon} source={require('../Media/info.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navIcon} source={require('../Media/location.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navIcon} source={require('../Media/bell.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Navigate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
        position: 'absolute',
        bottom: 80
      },
      Navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '92%',
        borderRadius: 10,
        padding: 15,
        paddingHorizontal: 30
      },
      navIcon: {
        width: 30,
        height: 30
      }
})

export default NavigationComponent
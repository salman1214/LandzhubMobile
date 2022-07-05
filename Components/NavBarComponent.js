import { Text, View, StyleSheet, TouchableOpacity, Image, BackHandler } from 'react-native'
import React, { Component } from 'react'

function NavBarComponent({ navigation }) {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navBarContent} onPress={() => { navigation.openDrawer() }}>
                <Image style={styles.Icon} source={require('../Media/hamburger.png')} />
                {/* <Text style={styles.pageTitle}>{title}</Text> */}
            </TouchableOpacity>
            <View style={styles.navBarIcon}>
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('LoginPage')}
                >
                    <Image style={styles.Icon} source={require('../Media/user.png')} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                    <Image style={{ width: 27, height: 27, marginLeft: 10 }} source={require('../Media/power-off.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#B6F797',
        padding: 20
    },
    navBarText: {
        color: 'black',
        fontWeight: '300',
        fontSize: 25
    },
    navBarIcon: {
        flexDirection: 'row'
    },
    Icon: {
        width: 27,
        height: 27
    },
    navBarContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pageTitle: {
        color: 'black',
        fontSize: 24,
        marginLeft: 20,
    }
})

export default NavBarComponent
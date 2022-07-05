import React, { useState, useRef, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function LoginPage({ navigation }) {

    useEffect(() => {
        navigation.setOptions({tabBarVisible: false})
    }, [])

    const scrollView = useRef()

    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity
                style={styles.Header}
                onPress={() => navigation.goBack()}
            >
                <Image style={styles.Logo} source={require('../Media/logo192.png')} />
                <Text style={styles.tagLine}>Buy And Sell Any Land</Text>
            </TouchableOpacity>

            <View style={styles.Tag}>
                <View style={styles.Toggler}>
                    <TouchableOpacity onPress={() => scrollView.current.scrollTo({ x: 0 })}>
                        <Text style={styles.toggleBtn} >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => scrollView.current.scrollToEnd()}>
                        <Text style={styles.toggleBtn} >SignUp</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    ref={scrollView}
                    horizontal
                    pagingEnabled
                >
                    <LoginForm />

                    <SignUpForm />
                </ScrollView>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        alignItems: 'center',
        backgroundColor: 'rgb(226, 219, 204)',
        height: '100%'
    },
    Header: {
        alignItems: 'center'
    },
    Logo: {
        width: 150,
        height: 150
    },
    tagLine: {
        color: '#1F9033',
        top: -32,
        fontSize: 18
    },
    Tag: {
        // backgroundColor: '#ECECEC',
        backgroundColor: 'white',
        width: '100%',
        height: 550,
        borderRadius: 20,
        paddingTop: 18,
        position: 'absolute',
        bottom: 0
        // padding: 30
    },
    Toggler: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 0.2,
        paddingBottom: 15
    },
    toggleBtn: {
        fontSize: 22,
        color: '#1F9033'
    }
})
export default LoginPage
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
  } from 'react-native'

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
      navigation.replace('Drawer');
    }, 700)
    return (
      <View style={styles.Screen}>
        <Image style={styles.logo} source={require('../Media/logo192.png')} />
        <Text style={styles.tagLine}>Buy And Sell Any Land</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    Screen: {
      backgroundColor: 'rgb(226, 219, 204)',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    spText: {
      color: 'black'
    },
    logo: {
      width: 160,
      height: 160
    },
    tagLine: {
      color: '#1F9033',
      top: -37,
      fontSize: 18
    }
  })

export default SplashScreen
import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

function HeaderComponent() {
    return (
        <View>
            <Image style={styles.headerImg} source={require('../Media/farm.jpg')} />
        </View>
    )
}


const styles = StyleSheet.create({
    headerImg: {
        width: '100%',
        height: 180,
        opacity: 0.5,
        backgroundColor: 'black'
      },
})

export default HeaderComponent
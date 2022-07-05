import React, {useContext} from 'react'
import LandContext from './context/land/LandContext'
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native'

function TagsComponent({ navigation }) {

    const l = useContext(LandContext)
    return (
        <View style={styles.Tags}>
            <TouchableOpacity
                onPress={() => {navigation.navigate('MapScreen')}}
            >
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/graphic-design.png')} />
                    <Text style={styles.sectionTitle}>Calculate Your Land</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('AddLand') }}
            >
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/plus.png')} />
                    <Text style={styles.sectionTitle}>Add My Land</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('BuyLand') }}
            >
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/house.png')} />
                    <Text style={styles.sectionTitle}>Buy Land</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                //     if (l.land.length > 0) {
                        navigation.navigate('AddedLands', l.land)
                //     }
                //     else {
                //         Alert.alert('Please Add Land!')
                //     }
                }}
            >
                <View style={styles.Tag}>
                    <Image style={styles.logo} source={require('../Media/location-pin.png')} />
                    <Text style={styles.sectionTitle}>My Lands</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 10
      },
      Tag: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid red',
        width: 150,
        height: 150,
        borderRadius: 20
      },
      logo: {
        width: 60,
        height: 60
      },
      sectionTitle: {
        marginTop: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
      },
})


export default TagsComponent
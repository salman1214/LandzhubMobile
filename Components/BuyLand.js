import React, { useState,useContext, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking
} from 'react-native'
import LandContext from './context/land/LandContext'



const api = [{
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    landPrice: '8.5 Crore',
    address: 'DHA phase 6, DHA Defence',
    landArea: '500 Sq. Yd.',
    addedTime: '3 hours ago',
    id: 1
}]




const BuyLand = () => {

    const [remove, setRemove] = useState('Remove')
    const sale = useContext(LandContext)
    
    useEffect(() => {
        setRemove('Remove')
    }, [remove])

    return (
        <View style={{ backgroundColor: 'rgb(226, 219, 204)', height: '100%' }}>
            <ScrollView style={styles.container}>
                {sale.forSale.map(({ id, photo, name, price, area, address, description }) => (
                    <View key={id} style={styles.tag}>
                        <Image source={{uri: photo}} style={{ width: '40%', height: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
                        <View style={styles.landData}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: 'grey', fontSize: 10, alignSelf: 'flex-end', marginBottom: 10 }}>3 Hours</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        const object = { id, photo, name, price, area, address, description }
                                        sale.removeItem(object)
                                        setRemove('Removed')
                                        console.log(sale.forSale)
                                        // console.log(object)
                                    }}
                                    style={{ borderWidth: 2, paddingVertical: 5, paddingHorizontal: 10, alignItems: 'center', borderRadius: 5, borderColor: 'green' }}
                                >
                                    <Text style={{ color: 'green', fontSize: 10, alignSelf: 'flex-end', fontWeight: '500', fontSize: 12 }}>{remove}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.landPrice}>PKR {price}</Text>
                            <Text style={styles.address}>{address}</Text>
                            <Text style={styles.landArea}>{area}</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <TouchableOpacity style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'green', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 }}>
                                    <Text style={{ color: 'green' }}>EMAIL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => { Linking.openURL('tel:03325275579') }}
                                    style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 }}
                                >
                                    <Text style={{ color: 'white' }}>CALL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ justifyContent: 'center' }}>
                                    <Image source={require('../Media/whatsapp.png')} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 13,
    },
    tag: {
        backgroundColor: 'white',
        width: '100%',
        height: 140,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5
    },
    landData: {
        margin: 8,
        justifyContent: 'center',
        width: '55%'
    },
    landPrice: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20
    },
    address: {
        color: 'black',
        fontSize: 14
    },
    landArea: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14
    },
    description: {
        color: 'black'
    }
})

export default BuyLand
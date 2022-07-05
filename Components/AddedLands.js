import React, {useContext, useState, useEffect} from 'react'
import LandContext from './context/land/LandContext'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
    Alert
} from 'react-native'
import axios from 'axios'


const AddedLands = () => {

    
    const [state, setState] = useState('Add to Sale')
    const [lands, setLands] = useState([])
    
    useEffect(() => {
        
        // .then((res) => {
        //     console.log(res.data)
        //     // setLands(res.data)
        // })
    }, [])

    const l = useContext(LandContext)

    return (
        <View style={{ backgroundColor: 'rgb(226, 219, 204)', height: '100%' }}>
            <ScrollView style={styles.container}>

                <TouchableOpacity
                    onPress={async()=>{
                        const data =await axios.get('192.168.8.104:3000/getland')
                        console.log("dataaaa======>",data);
                    }}
                    >
                    <Text>Hello</Text>
                </TouchableOpacity>
                {lands.map(({ id, image, title, price, size, address, description }) => (
                    <View key={id} style={styles.tag}>
                        {console.log(photo)}
                        <Image source={{uri: photo}} style={{ width: '40%', height: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
                        <View style={styles.landData}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                <Text style={{ color: 'grey', fontSize: 10, marginBottom: 10 }}>3 hours</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        l.forSale.push({ id, photo, name, price, area, address, description })
                                        Alert.alert('Added')
                                    }}
                                    style={{ borderWidth: 2, paddingVertical: 5, paddingHorizontal: 10, alignItems: 'center', borderRadius: 5, borderColor: 'green'}}
                                >
                                    <Text style={{ color: 'green', fontSize: 10, alignSelf: 'flex-end', fontWeight: '500', fontSize: 12 }}>{state}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{color: 'black', fontSize: 22, fontWeight: '500'}}>{name}</Text>
                            <Text style={styles.landPrice}>{price}</Text>
                            <Text style={styles.address}>{address}</Text>
                            <Text style={styles.landArea}>{area}</Text>
                            {/* <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <TouchableOpacity style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'green', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 }}>
                                    <Text style={{ color: 'green' }}>EMAIL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 }}
                                    onPress={() => { Linking.openURL('tel:03325275579') }}
                                >
                                    <Text style={{ color: 'white' }}>CALL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ justifyContent: 'center' }}>
                                    <Image source={require('../Media/whatsapp.png')} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity>
                            </View> */}
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

export default AddedLands
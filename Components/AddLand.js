import React, { useState, useContext } from 'react'
import LandContext from './context/land/LandContext'
import * as ImagePicker from "react-native-image-picker"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
    Button,
    Image
} from 'react-native'

let id = 3

const AddLand = ({ navigation }) => {

    const [landName, setLandName] = useState('')
    const [landPrice, setLandPrice] = useState('')
    const [landArea, setLandArea] = useState('')
    const [landAddress, setLandAddress] = useState('')
    const [landDescriprion, setLandDescriprion] = useState('')
    const [placeHolderColor, setPlaceHolderColor] = useState('black')
    const [state, setState] = useState(null)
    const [photo, setPhoto] = useState(false)

    const l = useContext(LandContext)

    const handleChoosePhoto = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            // console.log('response ', response.assets[0].uri)
            if(response.assets[0].uri){
                setState(response.assets[0].uri)
                setPhoto(true)
            }
        })
    }

    const Submit = () => {
        id++
        if (!landName) {
            setPlaceHolderColor('red')
        }
        if (!landPrice) {
            setPlaceHolderColor('red')
        }
        if (!landArea) {
            setPlaceHolderColor('red')
        }
        if (!landAddress) {
            setPlaceHolderColor('red')
        }
        if (!landDescriprion) {
            setPlaceHolderColor('red')
        }
        if(!photo) {
            Alert.alert('Please select an image')
        }
        else {
            l.land.push({ id: id, photo: state, name: landName, price: landPrice, area: landArea, address: landAddress, description: landDescriprion })
            setPlaceHolderColor('black')
            navigation.navigate('AddedLands', l.land)
        }
    }

    return (
        <View style={{ backgroundColor: 'rgb(226, 219, 204)', flex: 1 }}>
            <View style={{ padding: 20 }}>
                <Text style={{ color: 'black', alignSelf: 'center', fontSize: 20, padding: 20, fontWeight: '600' }}>ADD YOUR LAND</Text>

                <View>
                    <TextInput
                        style={[styles.input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                        placeholder='Give a name to your land *'
                        placeholderTextColor={placeHolderColor}
                        onChangeText={newText => setLandName(newText)}
                        defaultValue={landName}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            style={[styles.input2, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                            placeholder='Enter Price *'
                            placeholderTextColor={placeHolderColor}
                            onChangeText={newText => setLandPrice(newText)}
                            defaultValue={landPrice}
                        />

                        <TextInput
                            style={[styles.input2, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                            placeholder='Enter Land Area *'
                            placeholderTextColor={placeHolderColor}
                            onChangeText={newText => setLandArea(newText)}
                            defaultValue={landArea}
                        />
                    </View>

                    <TextInput
                        style={[styles.input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                        placeholder='Enter Land Address *'
                        placeholderTextColor={placeHolderColor}
                        onChangeText={newText => setLandAddress(newText)}
                        defaultValue={landAddress}
                    />

                    <TextInput
                        style={[styles.input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red' }]}
                        placeholder='Description *'
                        placeholderTextColor={placeHolderColor}
                        multiline={true}
                        onChangeText={newText => setLandDescriprion(newText)}
                        defaultValue={landDescriprion}
                    />

                    <TouchableOpacity
                        onPress={handleChoosePhoto}
                        style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'green', borderWidth: 1, padding: 10, borderRadius: 5 }}
                    >
                        <Text style={{ color: 'green' }}>SELECT IMAGE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={Submit}
                        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#B6F797', padding: 10, borderRadius: 5, marginTop: 10 }}
                    >
                        <Text style={{ color: 'black' }}>Submit</Text>
                    </TouchableOpacity>

                    <View style={{marginTop: 20}}>
                        {state && (
                            <Image source={{uri: state}}
                                style={{width: '100%', height: 200}}
                            />
                        )}
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        paddingVertical: 3,
        paddingLeft: 0,
        paddingRight: 3,
        color: 'black',
        marginBottom: 30
    },
    input2: {
        borderBottomWidth: 1,
        paddingVertical: 3,
        paddingLeft: 0,
        paddingRight: 3,
        color: 'black',
        marginBottom: 30,
        width: '47%',
    }
})

export default AddLand
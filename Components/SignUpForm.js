import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'

function SignUpForm() {
    return (
        <View style={styles.Form}>
            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.Heading}>Create Your Username</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder='Create Username'
                        placeholderTextColor="#D0D0D0"
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.Heading}>Enter Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.Input}
                        placeholder='Enter Password'
                        placeholderTextColor="#D0D0D0"
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.Heading}>Confirm Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.Input}
                        placeholder='Enter Password'
                        placeholderTextColor="#D0D0D0"
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginBtnText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>View Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Form: {
        width: Dimensions.get('window').width
    },
    formContainer: {
        padding: 30,
    },
    Heading: {
        color: '#1F9033',
        fontSize: 15,
        marginLeft: 3
    },
    Input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 3,
        color: 'black'
    },
    loginBtn: {
        backgroundColor: '#B6F797',
        padding: 10,
        marginTop: 30,
        borderRadius: 5
    },
    loginBtnText: {
        color: 'black',
        textAlign: 'center'
    },
    forgotText: {
        color: '#1F9033',
        textAlign: 'center',
        marginTop: 20
    }
})

export default SignUpForm
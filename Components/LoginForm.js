import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'

function LoginForm() {
    return (
        <View style={styles.Form}>
            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.Heading}>Username</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder='Enter Username'
                        placeholderTextColor="#D0D0D0"
                        />
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={styles.Heading}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.Input}
                        placeholder='Enter Password'
                        placeholderTextColor="#D0D0D0"
                        />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Username or Password?</Text>
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
        padding: 30
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

export default LoginForm
import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";

function ContactUs(props) {


  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");


  const placeHolderColor = 'black'

  return (
    <ScrollView pagingEnabled style={styles.sectionContainer}>
      {/* <NavBarComponent navigation={props.navigation} /> */}
      <View style={styles.Header}>
        <Text style={styles.mainHeading}>CONTACT WITH US</Text>
        <View style={styles.formContainer}>
          <View>
            <Text style={{ color: 'black', fontSize: 18, textAlign: 'justify' }}>Thanks for joining us!</Text>
            <Text style={{ color: 'black', fontSize: 18, textAlign: 'justify', marginTop: 15 }}>This mobile application will allow you to contact us, so we can help you with your problems.</Text>
            <Text style={{ color: 'black', fontSize: 18, textAlign: 'justify', marginVertical: 15 }}>We are available on WhatsApp, SMS, Call and Email if you have any concerns</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
            <TouchableOpacity
              style={{ backgroundColor: 'white', width: '48%', height: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => { Linking.openURL('whatsapp://send?text=&phone=03325275579') }}
            >
              <Image source={require('../Media/whatsapp.png')} style={{ width: 60, height: 60 }} />
              <Text style={{ color: 'black', fontSize: 18, marginTop: 10 }}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'white', width: '48%', height: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => { Linking.openURL('tel:03325275579') }}  
            >
              <Image source={require('../Media/telephone.png')} style={{ width: 60, height: 60 }} />
              <Text style={{ color: 'black', fontSize: 18, marginTop: 10 }}>Call Us</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{ backgroundColor: 'white', width: '48%', height: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => { Linking.openURL('sms:${+923325275579}') }}
            >
              <Image source={require('../Media/sms.png')} style={{ width: 60, height: 60 }} />
              <Text style={{ color: 'black', fontSize: 18, marginTop: 10 }}>Send SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'white', width: '48%', height: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => { Linking.openURL('mailto:salmannaqvi461@gmail.com') }}  
            >
              <Image source={require('../Media/email.png')} style={{ width: 60, height: 60 }} />
              <Text style={{ color: 'black', fontSize: 18, marginTop: 10 }}>Email Us</Text>
            </TouchableOpacity>
          </View>








          {/* <View>
            <TextInput
              style={styles.Input}
              placeholder='Name *'
              placeholderTextColor={placeHolderColor}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <TextInput
              // secureTextEntry={true}
              style={styles.Input}
              placeholder='Email *'
              placeholderTextColor={placeHolderColor}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <PhoneInput
              // ref={phoneInput}
              defaultValue={value}
              defaultCode="PK"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              withShadow
              autoFocus
            />
          </View>

          <TextInput
            style={[styles.Input, { borderBottomColor: placeHolderColor === 'black' ? 'black' : 'red', marginTop: 20 }]}
            placeholder='Enter a message *'
            placeholderTextColor={placeHolderColor}
            multiline={true}
          />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Send</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'rgb(226, 219, 204)',
    flex: 1
  },
  Header: {
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  mainHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  },
  formContainer: {
    paddingTop: 15,
  },
  Heading: {
    color: 'black',
    fontSize: 15,
    marginLeft: 3
  },
  Input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 3,
    paddingLeft: 0,
    paddingRight: 3,
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
});

export default ContactUs
import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
// import NavBarComponent from './NavBarComponent';

function Notification(props) {
  return (
    <View style={styles.sectionContainer}>
        {/* <NavBarComponent navigation={props.navigation} /> */}
        <View style={styles.Header}>
          <Text style={styles.Heading}>Hussain Malak</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
      backgroundColor: 'rgb(226, 219, 204)',
      height: '100%'
  },
  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 50
  },
  Heading: {
    color: 'black',
    fontSize: 30
  }
});

export default Notification
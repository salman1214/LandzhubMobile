import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'
// import NavBarComponent from './NavBarComponent'

function Info(props) {
  return (
    <View style={styles.sectionContainer}>
      {/* <NavBarComponent navigation={props.navigation} /> */}
      <ScrollView contentContainerStyle={styles.Header}>
        <Text style={styles.Heading}>Who We Are</Text>
        <Text style={styles.Information}>We are providing a platform where people can easily buy and sell any land on the internet. Our system is designed to cut out the middlemen, and make it easier for you to find your dream home, or make a good profit from your unwanted land.</Text>
        <Text style={styles.Information}>We at Landzhub goal to not only provide a platform where you can easily buy and sell any land, but also bring forth a world where everything you want is just a click away. With head offices in all major land hubs in the world such as USA, UK, UAE and Singapore, our team are constantly working hard to make your transaction with us as smooth and accomodating as possible.</Text>
        <Text style={styles.Information}>Buy and sell your dream home safely with us, where thousands of people trust us to buy their lands by checking title deeds and taking photos from different angles. We provide a platform where you can easily buy, sell or rent land at your wish.</Text>
        <Text style={styles.Information}>With our platform, you can easily buy and sell land. You only need few minutes to set up an ad, and the rest of the process is directly between you and the person who's interested in your property.</Text>
        <Text style={styles.Information}>You can now buy or sell real estate at the click of a button! Whether you want to buy an apartment in Florida, or an abandoned field in Colorado, we have it all. Our streamlined process will take you right to your dream home!</Text>
        <Text style={styles.Information}>Landzhub provides a platform where people can easily buy and sell any land. With all the required documents, images and property description you can complete your transaction in no time!  We at LandsHub.com understand the pain behind buying, selling and renting lands. Our platform provides a solution to this problem by providing a user friendly interface, where people can easily buy, sell or rent land.</Text>
        <Text style={styles.Information}>Landzhub is the first ever online land marketplace that allows you to quickly, safely and easily buy and sell lands all over the world. At landzhub you can easily search for a specific type of land from one country or even from multiple countries. Here we will try to provide every detail about the lands, what people are saying about that particular land and many more. We would like to connect people who have land with people who want to purchase land.</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'rgb(226, 219, 204)',
    height: '100%'
  },
  Header: {
    top: 20,
    padding: 10,
    paddingBottom: 120
  },
  Heading: {
    color: 'black',
    fontSize: 25,
    paddingBottom: 5,
    alignSelf:'center'
  },
  Information: {
    fontSize: 17,
    color: 'black',
    textAlign: 'justify',
    lineHeight: 23,
    paddingVertical: 5
  }
});

export default Info
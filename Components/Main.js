import React from 'react'
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import HeaderComponent from './HeaderComponent';
// import NavBarComponent from './NavBarComponent';
import TagsComponent from './TagsComponent';

function Main(props) {
    return (
        <SafeAreaView style={styles.sectionContainer}>
            {/* <NavBarComponent navigation={props.navigation} /> */}
            <HeaderComponent />

            <TagsComponent navigation={props.navigation} />

            {/* <NavigationComponent/> */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'rgb(226, 219, 204)',
        height: '100%'
    }
});

export default Main
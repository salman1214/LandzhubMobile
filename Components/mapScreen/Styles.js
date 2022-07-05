import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    map:{
        flex:1
    },
    minusBt: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: wp(0),
        marginTop: wp(2),
    },btnPop1: {
        height: hp(6),
        width: wp(10),
        borderRadius: wp(7),
        backgroundColor: 'green',
        marginLeft: wp(2),
        position: 'absolute',
        top: wp(10),
        zIndex: 1000,
    },

    btnPop3: {
        height: hp(6),
        width: wp(10),
        borderRadius: wp(7),
        backgroundColor: 'green',
        marginLeft: wp(2),
        position: 'absolute',
        top: wp(35),
        zIndex: 1000,
    },
    btnPop4: {
        height: hp(6),
        width: wp(10),
        borderRadius: wp(7),
        backgroundColor: 'green',
        marginLeft: wp(2),
        position: 'absolute',
        top: wp(10),
        zIndex: 1000,
        // alignSelf:'flex-end'
    },
    btnPop5: {
        height: hp(6),
        width: wp(10),
        borderRadius: wp(7),
        // backgroundColor: 'green',
        marginLeft: wp(2),
        position: 'absolute',
        top: wp(23),
        zIndex: 1000,
        // alignSelf:'flex-end'

    },
    btnPop6: {
        height: hp(6),
        width: wp(10),
        borderRadius: wp(7),
        backgroundColor: 'green',
        marginLeft: wp(2),
        position: 'absolute',
        top: wp(10),
        zIndex: 1000,
        alignSelf:'flex-end'

    },
    btnPop7: {
        height: hp(6),
        width: wp(10),
        borderRadius: wp(7),
        backgroundColor: 'green',
        marginLeft: wp(2),
        position: 'absolute',
        top: wp(23),
        zIndex: 1000,
        alignSelf:'flex-end'

    },

})
export default styles;
import React from "react";
import { View , Text} from "react-native";
import MapLibreGl from "@react-native-mapbox-gl/maps";


MapLibreGl.setAccessToken('pk.eyJ1IjoiYWxpcmF6YTU1MTIxNCIsImEiOiJja3Y3cXg0YnMwaGJoMm9xdWsyNHQzZG1lIn0.4NP5kY_K4TmHx7BhrxSVww');

export default MapScreen = () => {

  // const renderAnnotations = () => {
  //   return (
  //     <MapLibreGl.PointAnnotation
  //       key="pointAnnotation"
  //       id="pointAnnotation"
  //       coordinate={[3.3362400, 6.5790100]}>
  //       <View style={{
  //                 height: 30, 
  //                 width: 30, 
  //                 backgroundColor: '#00cccc', 
  //                 borderRadius: 50, 
  //                 borderColor: '#fff', 
  //                 borderWidth: 3
  //               }} />
  //     </MapLibreGl.PointAnnotation>
  //   );
  // }

  var cccc = {
    "version": 8,
    "sources": {
        "simple-tiles": {
            "type": "raster",
            "tiles": [
                'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
            ],
            "tileSize": 128
        }
    },
    "layers": [{
        "id": "simple-tiles",
        "type": "raster",
        "source": "simple-tiles",
        "minzoom": 0,
        "maxzoom": 22
    }]
}

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Text>map screen</Text>
      <MapLibreGl.MapView
        logoEnabled={false}
        attributionEnabled={false}
        compassEnabled={true}
        styleURL={JSON.stringify(cccc)}
        zoomEnabled={true}
        scrollEnabled={true}
        showsUserLocation={true}
        userTrackingMode={1}
        // onDidFinishLoadingStyle={() => setmaploaded(true)}
        style={{flex: 1, }}>
          <MapLibreGl.Camera
            zoomLevel={16}
            centerCoordinate={[3.3362400, 6.5790100]}
            animationMode={'flyTo'}
            animationDuration={0}
          >
          </MapLibreGl.Camera>
          {/* {renderAnnotations()} */}
      </MapLibreGl.MapView>
    </View>
  )
}










































// import React, { useState, useEffect } from 'react';
// import {
//     Image,
//     SafeAreaView,
//     ScrollView,
//     StyleSheet,
//     ImageBackground,
//     Text,
//     View,
//     TouchableOpacity, ActivityIndicator
// } from 'react-native';
// import Styles from './Styles'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import MapLibreGL from '@react-native-mapbox-gl/maps';
// import Geolocation from 'react-native-geolocation-service';
// import Location from 'react-native-vector-icons/MaterialIcons';
// import Temp from 'react-native-vector-icons/FontAwesome5';
// import MapsImage from 'react-native-vector-icons/Entypo';

// MapLibreGL.setAccessToken('');

// const MapScreen = (props) => {

//     const [isChangeView, setIsChangeView] = useState('')
//     const [cameralng, setcameralng] = useState(73)
//     const [cameralat, setcameralat] = useState(33)
//     const [mapzoomLevel, setmapzoomLevel] = useState(8)
//     const [maploaded, setmaploaded] = useState(false)
//     const [overlay, setoverlay] = useState('')

//     const [isColor, setIsColor] = useState('green')





//     useEffect(() => {
//         getCurrentLocation();
//     }, [])

//     const getCurrentLocation = () => {
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 console.log("position--->>", position.coords.longitude);
//                 setmapzoomLevel(18)
//                 setcameralat(position.coords.latitude);
//                 setcameralng(position.coords.longitude)

//             },
//             (error) => {
//                 // See error code charts below.
//                 console.log("curent location", error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         )
//     }

//     const _onPress = () => {
//         setIsColor(!isColor)
//         if (isColor === "green") {
//             setIsColor("red")
//         }
//         else {
//             setIsColor("green")
//         }
//     }


//     var cccc = {
//         "version": 8,
//         "sources": {
//             "simple-tiles": {
//                 "type": "raster",
//                 "tiles": [
//                     'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
//                 ],
//                 "tileSize": 128
//             }
//         },
//         "layers": [{
//             "id": "simple-tiles",
//             "type": "raster",
//             "source": "simple-tiles",
//             "minzoom": 0,
//             "maxzoom": 22
//         }]
//     }



//     return (
//         <View style={{ flex: 1 }}>


//             <View style={{ flex: 1 }}>

//                 {
//                     //Temperature
//                 }
//                 <TouchableOpacity
//                     onPress={() => setoverlay('temp')}
//                     style={[Styles.btnPop3]}>
//                     <Temp name="temperature-high" size={25} color="#fff" style={Styles.minusBt} />
//                 </TouchableOpacity>

//                 {
//                     //Clouds
//                 }
//                 <TouchableOpacity
//                     onPress={() => setoverlay('clouds_cls')}
//                     style={[Styles.btnPop4]}>
//                     <Temp name="cloud-moon" size={25} color="#fff" style={Styles.minusBt} />
//                 </TouchableOpacity>

//                 {
//                     //Rain
//                 }
//                 <TouchableOpacity
//                     onPress={() => { setoverlay('rain'), _onPress() }}
//                     style={[Styles.btnPop5, { backgroundColor: isColor == "green" ? "green" : 'red' }]}>
//                     <Temp name="cloud-rain" size={25} color="#fff" style={Styles.minusBt} />
//                 </TouchableOpacity>

//                 {
//                     //Perciptation
//                 }
//                 <TouchableOpacity
//                     onPress={() => { setoverlay('pressure') }}
//                     style={[Styles.btnPop6]}>
//                     <MapsImage name="drop" size={25} color="#fff" style={Styles.minusBt} />
//                 </TouchableOpacity>

//                 {
//                     //Wind-Speed
//                 }
//                 <TouchableOpacity
//                     onPress={() => setoverlay('wind')
//                     }
//                     style={[Styles.btnPop7,]}>
//                     <Temp name="wind" size={25} color="#fff" style={Styles.minusBt} />
//                 </TouchableOpacity>





//                 <MapLibreGL.MapView
//                     logoEnabled={false}
//                     attributionEnabled={false}
//                     compassEnabled={true}
//                     styleURL={JSON.stringify(cccc)}
//                     zoomEnabled={true}
//                     scrollEnabled={true}
//                     showsUserLocation={true}
//                     userTrackingMode={1}
//                     onDidFinishLoadingStyle={() => setmaploaded(true)}
//                     style={Styles.map} >
//                     <MapLibreGL.Camera animationDuration={0} centerCoordinate={[cameralng, cameralat]} zoomLevel={mapzoomLevel} />

//                     <MapLibreGL.RasterSource
//                         id='temperature'
//                         url='https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=ac6f2688dbfdc24772be777529947e27&opacity=0.9'
//                         tileSize={512} />

//                     <MapLibreGL.RasterSource
//                         id='rain'
//                         url='https://tile.openweathermap.org/map/rain_cls/{z}/{x}/{y}.png?appid=ac6f2688dbfdc24772be777529947e27&opacity=0.9'
//                         tileSize={512} />

//                     <MapLibreGL.RasterSource
//                         id='clouds_cls'
//                         url='https://tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png?appid=ac6f2688dbfdc24772be777529947e27&opacity=0.9'
//                         tileSize={512} />

//                     <MapLibreGL.RasterSource
//                         id='wind'
//                         url='https://tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=ac6f2688dbfdc24772be777529947e27&opacity=0.9'
//                         tileSize={512} />

//                     <MapLibreGL.RasterSource
//                         id='pressure'
//                         url='https://tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid=ac6f2688dbfdc24772be777529947e27&opacity=0.9'
//                         tileSize={512} />



//                     {
//                         overlay == 'temp' ?
//                             <MapLibreGL.RasterLayer id='temperature' sourceID='temperature' />
//                             :
//                             null
//                     }

//                     {
//                         overlay == 'rain' ?
//                             <MapLibreGL.RasterLayer id='rain' sourceID='rain' />
//                             : null
//                     }

//                     {
//                         overlay == 'clouds_cls' ?
//                             <MapLibreGL.RasterLayer id='clouds_cls' sourceID='clouds_cls' />
//                             : null
//                     }

//                     {
//                         overlay == 'wind' ?
//                             <MapLibreGL.RasterLayer id='wind' sourceID='wind' />
//                             : null
//                     }

//                     {
//                         overlay == 'wind' ?
//                             <MapLibreGL.RasterLayer id='wind' sourceID='wind' />
//                             : null
//                     }

//                     {
//                         overlay == 'pressure' ?
//                             <MapLibreGL.RasterLayer id='pressure' sourceID='pressure' />
//                             : null
//                     }


//                 </MapLibreGL.MapView>


//             </View>




//         </View>
//     )
// }
// export default MapScreen;





// import React from 'react'
// import {
//     View,
//     Text
// } from 'react-native'
// const MapScreen = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text style={{color: 'black', fontSize: 25}}>Map Screen</Text>
//     </View>
//   )
// }

// export default MapScreen
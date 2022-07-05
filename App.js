import React from 'react';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Components/navigations/StackNavigation';
import LandState from './Components/context/land/LandState';

const App = () => {

  return (
    <LandState>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </LandState>
  );
};

export default App;
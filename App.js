import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './components/css/styles';
import { ProfilePage } from "./components/pages/Profile";
import { LoginPage } from "./components/pages/login";
import { Location } from "./components/pages/location";
import { apihome } from "./components/pages/apimain";
import { apiOut } from "./components/pages/apioutput";
// import { Gallery } from "./components/pages/nlgallery";
// import { launchCamera } from "react-native-image-picker";
import { nammacamera } from "./components/pages/camera";
import { count } from "./components/pages/countermain";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED', }} />
        <Stack.Screen name="Profile" component={ProfilePage} options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED',headerTitle:'Dashboard', }} />
        <Stack.Screen name="Location" component={Location} options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED',headerTitle:'Location Task' }} />
        <Stack.Screen name="Camera" component={ nammacamera } options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED',headerTitle:'Camera Task'}} />
        <Stack.Screen name="ApiData" component={ apihome } options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED',headerTitle:'API TASK HOME'}} />
        <Stack.Screen name="ApiOut" component={ apiOut } options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED',headerTitle:'Fetched Data!'}} />
        <Stack.Screen name="counteApp" component={ count } options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED',headerTitle:'When Redux works!'}} />
        {/* <Stack.Screen name="contacts" component={ loadcontact } options={{ headerStyle: { backgroundColor: "#171717" }, headerTintColor: '#EDEDED',headerTitle:'contact'}} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


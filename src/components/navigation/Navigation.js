import React, {useContext, useState, useEffect} from "react";
import {View, StatusBar, Platform, ActivityIndicator} from "react-native"
import {AuthContext} from "../../context/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "../../screens/Auth/LoginScreen";

import Header from "../Header";

import AppContainer from "../AppContainer";
import DrawerNavigation from "./DrawerNavigation";
import Recordings from "../../screens/Videos/Recordings";
import DownloadScreen from "../../screens/DownloadScreen";
import axios from "axios";


const Stack = createNativeStackNavigator();

const LoadingScreen = () => (
  <AppContainer>
    <ActivityIndicator color={"#fff"} size={"large"}/>
  </AppContainer>
)

const Navigation = () => {
  const {user, token, setUser, setToken, setAxiosURI} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let user1 = getUser();
  },[])

  const getUser = async () => {

    try {
      const _user = await AsyncStorage.getItem('user')
      const _token = await AsyncStorage.getItem('token')
      const _uri = await AsyncStorage.getItem('axiosURI')
      axios.defaults.baseURL= _uri
      if(_user !== null && _token !== null) {
        setUser(JSON.parse(_user))
        setToken(_token)
        setAxiosURI(_uri)
      }
    } catch(e) {
      alert('Error while reading user information.')
    }
    setLoading(false)
  }

  const stackScreens = [
    {name:'HomeScreen',component:DrawerNavigation,animation:'fade',headerShown:false},
    {name:'Recordings',component:Recordings,animation:'slide_from_right',headerShown:true},
    {name:'DownloadScreen',component:DownloadScreen,animation:'slide_from_right',headerShown:true},
  ]

  return (
    <NavigationContainer>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      />
      <Stack.Navigator>
        {
          loading ? <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{
                animation: "fade",
                headerShown: false
              }}
            /> :
            user !== undefined && token !== undefined  ? <>
                {
                  stackScreens.map((screen, i)=>(
                    <Stack.Screen
                      key={i}
                      name={screen.name}
                      component={screen.component}
                      options={{
                        animation: screen.animation,
                        headerShown: screen.headerShown,
                        header: Header
                      }}
                    />
                  ))
                }
              </>
              :
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{
                    animation: "fade_from_bottom",
                    headerShown: false,
                  }}
                />
              </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

import React, {useContext, useEffect, useState} from "react";
import {ActivityIndicator, SafeAreaView, View, Image, TouchableOpacity} from "react-native";
import {styles} from "../styles/Styles";
import {Icon, Text} from "native-base";
import {AuthContext} from "../context/AuthContext";
import {monitors} from "../utilities/api";
import {APP_API} from "../utilities/config";
import { useIsFocused } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import {Video} from "expo-av";
import * as ScreenOrientation from 'expo-screen-orientation';
import {deviceWidth, deviceHeight} from "../styles/Styles";

const HomeScreen = ({navigation}) => {
  const {user, token, setMonitors} = useContext(AuthContext)
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState([])
  const isFocused = useIsFocused();
  const [random,setRandom] = useState('');
  const [onLive, setOnLive] = useState(undefined)
  const [isLandScape, setIsLandScape] = useState(false);
  let timer;

  useEffect(()=>{
    if(isFocused && onLive===undefined){
      timer = setInterval(()=>{
        setRandom(Math.random())
      },10000)
    }
     return () => clearInterval(timer)
  },[isFocused, onLive])

  useEffect(()=>{
    let m = getMonitors();
  },[])

  const getMonitors = async () => {
    setLoading(true)
    let mons = []
    await monitors(token,user.ke).then(res=>{
      console.log(res)
      setData(res)

      res.map((mon,i) => mons[i]=mon.mid)

    }).catch(err=>{
      console.log(err.response)
      alert('Error while getting monitors')
    })
    setMonitors(mons)
    setLoading(false)
  }

  const showLive = (mid) => {
    setOnLive(mid)
    clearInterval(timer);
  }

  const stopLive = () => {
    setOnLive(undefined);
  }



  return (
    <SafeAreaView style={[styles.flex1, styles.backgroundDark, styles.p1]}>
      <Text fontSize={'xl'}>Monitors</Text>
      {
        loading && <ActivityIndicator style={"#fff"} size={"large"}/>
      }
      {
        data.map((monitor,i)=>(
          <View key={i} style={[styles.p1, styles.backgroundSemiDark, styles.rounded, styles.mY1]}>
            {
              onLive === undefined &&
                <Image style={{width: '100%', height: 260}} source={{uri: `${APP_API}${monitor.snapshot}?${random}`}}/>
            }
            {
              onLive && onLive === monitor.mid &&
              <Video
                shouldPlay
                style={{width:'100%',height:250}}
                source={{
                  uri: `${APP_API}${monitor.streamsSortedByType.hls[0]}`,
                }}

                resizeMode="contain"
                useNativeControls
              />
            }
            <View style={[styles.mT1,styles.flex,styles.flexRow,styles.justifySpaceBetween,styles.alignCenter]}>
              <TouchableOpacity onPress={()=>navigation.navigate('Recordings',{monitor:monitor})}>
                <Text fontSize={"lg"} bold>{monitor.name}</Text>
                <Text>Mode: {monitor.mode}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                if(onLive===undefined){
                  showLive(monitor.mid)
                } else {
                  stopLive()
                }
              }}>
                {
                  onLive === undefined &&
                  <Icon as={MaterialIcons} name={"live-tv"} size={8}/>
                }
                {
                  onLive === monitor.mid &&
                    <Icon as={FontAwesome} name={"stop-circle"} size={8}/>
                }
              </TouchableOpacity>
            </View>
          </View>
        ))
      }
    </SafeAreaView>
  )
}
export default HomeScreen

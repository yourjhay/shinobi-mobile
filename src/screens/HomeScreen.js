import React, {useContext, useEffect, useState} from "react";
import {ActivityIndicator, SafeAreaView, View, Image, TouchableOpacity} from "react-native";
import {styles} from "../styles/Styles";
import {Text} from "native-base";
import {AuthContext} from "../context/AuthContext";
import {monitors} from "../utilities/api";
import {APP_API} from "../utilities/config";
import { useIsFocused } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

const HomeScreen = ({navigation}) => {
  const {user, token} = useContext(AuthContext)
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState([])
  const isFocused = useIsFocused();
  const [random,setRandom] = useState('');
  let timer;

  useEffect(()=>{
    if(isFocused){
      timer = setInterval(()=>{
        setRandom(Math.random())
      },3000)
    }
     return () => clearInterval(timer)
  },[isFocused])

  useEffect(()=>{
    let m = getMonitors();
  },[])

  const getMonitors = async () => {
    setLoading(true)
    await monitors(token,user.ke).then(res=>{
      console.log(res)
      setData(res)
    }).catch(err=>{
      console.log(err.response)
      alert('Error while getting monitors')
    })
    setLoading(false)
  }
  return (
    <SafeAreaView style={[styles.flex1, styles.backgroundDark, styles.p1]}>
      <Text fontSize={'xl'}>Monitors</Text>
      {
        loading && <ActivityIndicator style={"#fff"} size={"large"}/>
      }
      {
        data.map((monitor,i)=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Recordings',{monitor:monitor})} key={i} style={[styles.p1, styles.backgroundSemiDark, styles.rounded, styles.mY1]}>
            <Image style={{width:'100%',height:260}}  source={{uri: `${APP_API}${monitor.snapshot}?${random}`}}/>
            <View style={styles.mT1}>
              <Text fontSize={"lg"} bold>{monitor.name}</Text>
              <Text>Mode: {monitor.mode}</Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </SafeAreaView>
  )
}
export default HomeScreen

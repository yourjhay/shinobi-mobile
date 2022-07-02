import React, {useContext, useEffect, useState} from "react";
import {ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity, View} from "react-native";
import {styles} from "../../styles/Styles";
import {Icon, Text} from "native-base";
import {AuthContext} from "../../context/AuthContext";
import {videos} from "../../utilities/api";
import {AntDesign} from "@expo/vector-icons";
import moment from "moment";
import { Video, AVPlaybackStatus } from 'expo-av';
import VideoModal from "../../components/VideoModal";

const Recordings = ({route,navigation}) => {
  const {user, token} = useContext(AuthContext)
  const {monitor} = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(undefined)
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    video !== undefined && setOpen(true)
  },[video])

  useEffect(()=>{
    let dt = getVideos()
  },[monitor])


  const getVideos = async () => {
    setLoading(true)
    await videos(token,user.ke, monitor.mid, 40).then(res=>{
      setData(res.videos)
      console.log(res.videos)
    }).catch(err=>{
      alert("Error while getting videos")
    })
    setLoading(false)
  }

  const renderItem = ({item}) => (
    <View style={[styles.p1, styles.backgroundSemiDark, styles.rounded, styles.mY1_2, styles.flexRow, styles.justifySpaceBetween, styles.alignCenter]}>
        <View style={[styles.flex,styles.justifySpaceBetween]}>
          <Text fontSize={"lg"} bold>{item.filename}</Text>
          <View style={[styles.flex, styles.flexRow]}>
            <Text>{moment(item.time).format('Y-MM-DD')} </Text>
            <Text bold style={styles.textGray}>({moment(item.time).format('hh:mm A')} - {moment(item.end).format('hh:mm A')} )</Text>
          </View>
          <Text>{(item.size / 1048576).toFixed(2)} MB</Text>
        </View>
      <TouchableOpacity onPress={()=>setVideo(item)}>
        <Icon as={AntDesign} name={"play"} size={8}/>
      </TouchableOpacity>
    </View>
  )

  const renderEmpty = () => (
    <View style={styles.flex1}>
      {
        loading ?
          <View style={[styles.flex1, styles.alignCenter, styles.justifyCenter]}>
            <ActivityIndicator color={"#fff"} size={"large"}/>
          </View>
          :
          <View style={[styles.flex1, styles.alignCenter, styles.justifyCenter]}>
            <Text style={{ color: 'white' }}>
              No data
            </Text>
          </View>
      }
    </View>
  )

  return (
    <SafeAreaView style={[styles.flex1, styles.backgroundDark, styles.p1]}>
      <Text fontSize={'xl'}>{monitor.name}: Latest Recordings</Text>
      {
        open &&
        <VideoModal video={video} setIsOpen={()=>{
          setOpen(false)
          setVideo(undefined)
        }} isOpen={open}/>
      }
      <FlatList
        contentContainerStyle={{ flexGrow: 1, marginTop:20 }}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </SafeAreaView>
  )
}

export default Recordings

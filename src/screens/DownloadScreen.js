import React, {useContext, useEffect, useState} from "react";
import {styles} from "../styles/Styles";
import {SafeAreaView, View} from "react-native";
import {Alert, Button, CloseIcon, HStack, Icon, IconButton, Progress, Text, VStack} from "native-base";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FontAwesome} from "@expo/vector-icons";
import * as MediaLibrary from 'expo-media-library';
import moment from "moment";
import {AuthContext} from "../context/AuthContext";

const DownloadScreen = ({route, navigation}) => {
  const {axiosURI} = useContext(AuthContext);
  const {video} = route.params;
  const [downloaded, setDownloaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);

  useEffect(()=>{
    setDownloaded(false)
  },[video])

  const readDir = async () => {
    let contents =await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
    console.log(contents)
  }

  const callback = downloadProgress => {
    const _progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    setProgress(_progress)
  };

  const downloadResumable = FileSystem.createDownloadResumable(
    `${axiosURI}${video.href}`,
    FileSystem.documentDirectory + video.filename,
    {},
    callback
  );

  const handleDownload = async () => {
    await MediaLibrary.requestPermissionsAsync(true)

    setDownloading(true)
    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished downloading to ', uri);
      await MediaLibrary.saveToLibraryAsync(uri)
      await FileSystem.deleteAsync(uri)
      setDownloaded(true);
    } catch (e) {
      console.error(e);
    }
    setDownloading(false)

  }

  const handlePauseDownload = async () => {
    try {
      await downloadResumable.pauseAsync();
      console.log('Paused download operation, saving for future retrieval');
      await AsyncStorage.setItem('pausedDownload', JSON.stringify(downloadResumable.savable()));
    } catch (e) {
      console.error(e);
    }
  }

  const handleResume = async () => {
    try {
      const { uri } = await downloadResumable.resumeAsync();
      console.log('Finished downloading to ', uri);
      await MediaLibrary.saveToLibraryAsync(uri)
      setDownloaded(true);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <SafeAreaView style={[styles.flex1, styles.backgroundDark, styles.p1]}>
      <Text fontSize={"lg"}>Download Recording</Text>
      <View style={[styles.flex, styles.p3, styles.justifySpaceAround]}>
        <View style={[styles.p1, styles.bordered ,styles.rounded, styles.backgroundLightDark]}>
          <Text style={styles.textGray}>{video.filename}</Text>
          <Text bold>{moment(video.time).format('MMMM DD Y')}</Text>
          <Text bold>{moment(video.time).format('hh:mm A')} - {moment(video.end).format('hh:mm A')}</Text>
          <Text style={styles.mB1}>{(video.size / 1048576).toFixed(2)} MB</Text>
          {
            downloading && <Progress colorScheme="emerald" value={(progress*100).toFixed(2)} />
          }
        </View>
      </View>
      {
        !downloaded &&  <Button isLoading={downloading} startIcon={<Icon as={FontAwesome} name={"download"} size={5}/>} onPress={handleDownload}>Download</Button>
      }

      {
        downloaded && <Alert w="100%" status={"success"}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  Video downloaded on your gallery.
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
                borderWidth: 0
              }} icon={<CloseIcon onPress={()=>navigation.goBack()} size="3" />} _icon={{
                color: "coolGray.600"
              }} />
            </HStack>
          </VStack>
        </Alert>
      }
    </SafeAreaView>
  )
}

export default DownloadScreen

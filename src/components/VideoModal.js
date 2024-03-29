import React, {useContext, useState} from "react";
import PropTypes from 'prop-types';
import {Button, Icon, Modal, Text} from "native-base";
import {colors, styles} from "../styles/Styles";
import {AuthContext} from "../context/AuthContext";
import { Video } from 'expo-av'
import moment from "moment";
import {TouchableOpacity, View} from "react-native";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

const VideoModal = ({isOpen, setIsOpen, video, navigation}) => {
  const {user, token, axiosURI} = useContext(AuthContext)
  const _video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [rate, setRate] = useState(1);

  console.log('video',video)

  const handleForward = () => {
    if(rate < 30) {
      setRate(rate+.5);
    }
  }
  const handleBackward = () => {
    if(rate > 0.5) {
      setRate(rate-.5);
    }
  }

  return (
    <Modal  _backdrop={{
      _dark: {
        bg: '#000',
        opacity: 80,
      },
    }} isOpen={isOpen} defaultIsOpen={true} onClose={()=>setIsOpen(false)} size={"xl"}>
      <Modal.Content>
        <Modal.Header>
          <View style={[styles.flex, styles.flexRow, styles.alignCenter, styles.justifySpaceBetween]}>
            <Text>{video?.filename}</Text>
            <TouchableOpacity onPress={()=> {
              setIsOpen(false)
              navigation.navigate('DownloadScreen',{video:video})
            }}>
              <Icon as={FontAwesome} name={"download"} size={7}/>
            </TouchableOpacity>
        </View>
        </Modal.Header>
        <Modal.Body>
          <View style={[styles.flex, styles.flexRow]}>
            <Text>{moment(video?.time).format('Y-MM-DD')} </Text>
            <Text bold style={styles.textGray}>({moment(video?.time).format('hh:mm A')} - {moment(video?.end).format('hh:mm A')} )</Text>
          </View>
          <Video
            ref={_video}
            style={{width:'100%',height:200}}
            source={{
              uri: `${axiosURI}${video?.href}`,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            rate={rate}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </Modal.Body>
        <Modal.Footer style={[styles.flex, styles.justifySpaceBetween, styles.alignCenter]}>
          <View style={[styles.flex, styles.flexRow]}>
            <TouchableOpacity onPress={handleBackward}>
              <Icon as={AntDesign} name={"fastbackward"} style={styles.mX1} size={5}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForward}>
              <Icon as={AntDesign} name={"fastforward"} style={styles.mX1} size={5}/>
            </TouchableOpacity>
            <Text>{rate}x</Text>
          </View>
          <Button.Group space={2}>
            <Button
              variant={"outline"}
              borderColor={colors.primaryColor}
              onPress={()=>setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onPress={() =>
                status.isPlaying ? _video.current.pauseAsync() : _video.current.playAsync()
              }>{status.isPlaying ? 'Pause' : 'Play'}</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
}

export default VideoModal

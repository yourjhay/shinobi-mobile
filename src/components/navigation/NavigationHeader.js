import React from "react";
import {Text} from "native-base";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {Icon} from "native-base";
import {styles} from "../../styles/Styles";
import {Image, TouchableOpacity, View} from "react-native";
import logo from "../../assets/logo.png"

const NavigationHeader = ({navigation}) => {
  return (
    <View style={[styles.flex, styles.justifySpaceBetween, styles.flexRow, styles.alignCenter, styles.p1,{backgroundColor:'rgb(15, 15, 15)'}]} >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>
          <Icon color={'#F06D19'}  size="5" as={AntDesign} name="menu-fold" />
        </Text>
      </TouchableOpacity>
      <Image source={logo} style={{height:30,width:30}} resizeMode={'contain'} />
      <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
        <Text>

        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavigationHeader

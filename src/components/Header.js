import React from "react";
import {Box, Text, useColorModeValue} from "native-base";
import {FontAwesome} from "@expo/vector-icons";
import {Icon} from "native-base";
import {styles} from "../styles/Styles";
import {TouchableOpacity, View} from "react-native";

const Header = ({navigation}) => {
  return (
    <View style={[styles.p1, styles.backgroundDark]}>
      {
        navigation.canGoBack() &&
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <Icon color={'#F06D19'}  size="5" as={FontAwesome} name="arrow-left" />
          </Text>
        </TouchableOpacity>
      }
    </View>
  )
}

export default Header

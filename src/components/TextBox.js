import React, {useState} from "react";
import PropTypes from 'prop-types';
import {styles} from "../styles/Styles";
import {HStack, Icon, Text} from "native-base";
import {FontAwesome} from "@expo/vector-icons";

import {ActivityIndicator, TextInput, TouchableOpacity, View} from "react-native";

const TextBox = ({label, icon, isSecure, onChangeText, value, error, loading, ...rest}) => {
  const [show,setShow]=useState(false)

  return(
    <View style={[styles.col10, styles.p1, styles.borderedBottom, styles.rounded, styles.mY1_2]}>
     <View style={[styles.flex, styles.flexRow, styles.alignCenter]}>
       <View style={styles.flexGrow}>
         <HStack alignItems={"center"} space={3}>
           {
             icon && <Text>{icon}</Text>
           }
           <Text style={styles.textBold}>{label}</Text>
         </HStack>
         <TextInput
           placeholderTextColor={"gray"}
           value={value}
           secureTextEntry={isSecure && !show}
           onChangeText={onChangeText} {...rest}
           style={[styles.textWhite]}
         />
       </View>
       <View>
         {
           isSecure &&  <TouchableOpacity onPress={()=>setShow(!show)}>
             <Icon  size="5" as={FontAwesome} name={!show ? 'eye-slash':'eye'} />
           </TouchableOpacity>
         }
         {
           !isSecure && loading && <ActivityIndicator color={"#fff"} size={"small"} />
         }
       </View>
     </View>
      {
        error &&
        error.map((e, i) => (
          <Text key={i} style={{color:'red'}}>{e}</Text>
        ))
      }
    </View>
  )
}

TextBox.propTypes  = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  isSecure: PropTypes.bool,
  onChangeText: PropTypes.func,
  value: PropTypes.string.isRequired,
  error: PropTypes.any,
  loading: PropTypes.bool
}

export default TextBox

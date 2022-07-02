import React, {useContext, useState} from "react";
import {Image, SafeAreaView, TouchableOpacity, View} from "react-native";
import {DrawerItem} from "@react-navigation/drawer";
import {colors, styles} from "../../styles/Styles";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {Center, Icon, Text} from "native-base";
import logo from "../../assets/logo.png";
import LogoutModal from "../LogoutModal";

const SidebarNavigationMenu = ({navigation}) => {

  const state = navigation.getState();
  const [isOpen,setIsOpen] = useState(false);

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={[styles.flex1, styles.justifySpaceBetween, styles.backgroundDark, {height:'100%'}]}>
         <View>
           <TouchableOpacity style={styles.p1} onPress={()=>navigation.closeDrawer()}>
             <Icon color={'#F06D19'}  size="7" as={AntDesign} name="close" />
           </TouchableOpacity>
           <Center>
             <Image source={logo} resizeMode={'contain'} style={{width:50,height:50, marginVertical:20}}/>
           </Center>
           <DrawerItem
             label={'Monitors'}
             focused={state.index === 0}
             onPress={()=>navigation.navigate('Home')}
             activeTintColor={colors.lightColor}
             inactiveTintColor={colors.gray}
             icon={({focused, color, size })=>(
               <Icon color={state.index===0 ? colors.lightColor : colors.gray}  size="5" as={AntDesign} name="flag" />
             )}
           />
           <DrawerItem
             style={styles.mT5}
             label={'Logout'}
             focused={state.index === 1}
             onPress={()=> {
               setIsOpen(true)
               navigation.closeDrawer()
             }}
             activeTintColor={colors.lightColor}
             inactiveTintColor={colors.gray}
             icon={({focused, color, size })=>(
               <Icon color={state.index===1 ? colors.lightColor : colors.gray}  size="5" as={AntDesign} name="logout" />
             )}
           />
         </View>
          <View style={styles.p1}>
            <Center>
              <Text fontSize={"xl"}>Shinobi Mobile</Text>
              <Text style={styles.textGray} bold>@ Rey Jhon</Text>
            </Center>
          </View>
        </View>
        <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </SafeAreaView>
  )
}

export default SidebarNavigationMenu

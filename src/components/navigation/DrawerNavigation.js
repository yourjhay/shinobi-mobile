import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "../../screens/HomeScreen";
import NavigationHeader from "./NavigationHeader";
import SidebarNavigationMenu from "./SidebarNavigationMenu";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const DrawerScreens = [
    {name:"Home",component:HomeScreen, showHeader:true, header: NavigationHeader},
  ];

  return (
    <Drawer.Navigator
      initialRouteName={'Home'}
      backBehavior="history"
      drawerContent={(props)=> <SidebarNavigationMenu {...props}/>}
    >
      {
        DrawerScreens.map((screen, index)=> (
          <Drawer.Screen
            key={index}
            name={screen.name}
            options={{
              headerShown: screen.showHeader,
              header: screen.header
            }}
            component={screen.component}
          />
        ))
      }
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

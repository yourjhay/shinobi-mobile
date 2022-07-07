import React from "react";
import {Box, useColorModeValue} from "native-base";
import {styles} from "../styles/Styles";

const AppContainer = (props) => {
  return (
    <Box flex={props.flex} style={[styles.alignCenter, styles.justifyCenter]} p={props.padding} bg={"black"}>
      {props.children}
    </Box>
  )
}

AppContainer.defaultProps = {
  flex: 1,
  padding: 10,
}

export default AppContainer

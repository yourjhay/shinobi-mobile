import React, {useState} from "react";
import AppContainer from "../components/AppContainer";
import {Button, Text} from "native-base";
import * as Updates from "expo-updates";

const UpdateScreen = () => {
  const [loading, setLoading]=useState(false)
  const [updating, setUpdating] =useState(false)

  const check = async () => {
    setLoading(true)
    try {
      const update = await Updates.checkForUpdateAsync();
      if(update.isAvailable) {
        setUpdating(true)
        await Updates.fetchUpdateAsync()
        alert('App has been updated. Please restart the application.')
      } else {
        alert('No update available')
      }
    } catch (error) {
      console.log(error)
      alert('Can\'t retrieve updates.')
    }
    setUpdating(false)
    setLoading(false)
  }

  return (
    <AppContainer>
      <Button isLoading={loading} isLoadingText={"Checking for Updates"} onPress={check}>CHECK FOR UPDATES</Button>
    </AppContainer>
  )
}

export default UpdateScreen

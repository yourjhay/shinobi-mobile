import React, {useContext, useState} from "react";
import PropTypes from 'prop-types';
import {Button, Modal, Text} from "native-base";
import {colors} from "../styles/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from "../context/AuthContext";

const LogoutModal = ({isOpen, setIsOpen}) => {
  const [loading, setLoading] = useState(false);
  const {setUser, setToken} = useContext(AuthContext)


  const handleLogout = async () => {
    setLoading(true)
      await AsyncStorage.clear()
      setUser(undefined)
      setToken(undefined)
  }

  return (
    <Modal isOpen={isOpen} defaultIsOpen={true} onClose={()=>setIsOpen(false)} size={"md"}>
      <Modal.Content maxH={212}>
        <Modal.Header>Logout</Modal.Header>
        <Modal.Body>
          <Text>Do you want to logout ?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant={"outline"}
              onPress={()=>setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button isLoading={loading} isLoadingText={'Logging out'} onPress={handleLogout}>Logout</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

LogoutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
}

export default LogoutModal

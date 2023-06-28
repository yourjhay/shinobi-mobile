import React, {useContext, useEffect, useState} from "react";
import {styles} from "../../styles/Styles";
import {Text, Button, Icon} from "native-base";
import {View, Image, TouchableOpacity} from "react-native";
import logo from "../../assets/logo.png";
import {FontAwesome} from "@expo/vector-icons";
import TextBox from "../../components/TextBox";
import AppContainer from "../../components/AppContainer";
import {AuthContext} from "../../context/AuthContext";
import useError from "../../hooks/useError";
import {login} from "../../utilities/api";
import useLogin from "../../hooks/useLogin";
import axios from "axios";

const LoginScreen = ({navigation}) => {
  const {setUser, setToken, setAxiosURI} = useContext(AuthContext);
  const setLogin = useLogin();
  const[uri,setUri] =useState('http://192.168.1.100:8080');

  useEffect(()=>{
    axios.defaults.baseURL = uri
    setAxiosURI(uri)
  },[uri])

  const [params, setParams] = useState({
    mail:'cherryanndiarios@gmail.com',
    pass:'',
    machineID:'GNSGH39352'
  });

  const {handleError, feedback, getError , setErrors} = useError()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await login(params).then(res=>{
      if(res.ok === false) {
        alert('Invalid Login credentials')
      } else {
        setLogin(res.$user, uri)
      }
    }).catch(err=>{
      alert('Error while logging in. Please check server and URI')
      console.log(err)
    })
    setLoading(false)
  }

  return (
    <AppContainer>
      <View style={styles.mB1}>
        <Image source={logo} style={{width:50,height:50}}/>
      </View>
      <Text style={[styles.font20, styles.textSemiBold]}>Sign in</Text>
      {
        feedback !== '' ?
          <Text style={[styles.textDanger, styles.mY1]}>{feedback}</Text>
          :
          <Text style={[styles.textGray, styles.mY1]}>Please sign-in to continue.</Text>
      }
      <TextBox
        value={uri}
        onChangeText={text=>setUri(text)}
        label={'URI'}
        icon={ <Icon  size="5" as={FontAwesome} name="globe" />}
      />
      <TextBox
        value={params.mail}
        onChangeText={text=>setParams({...params, mail:text})}
        error={getError('email')}
        label={'Email'}
        icon={ <Icon  size="5" as={FontAwesome} name="envelope" />}
      />
      <TextBox
        value={params.pass}
        onChangeText={text=>setParams({...params, pass:text})}
        error={getError('password')}
        isSecure
        label={'Password'}
        icon={ <Icon  size="5" as={FontAwesome} name="lock" />}
      />
     <View style={[styles.col10, styles.mT2]}>
       <Button
         isDisabled={params.mail==='' || params.pass === ''}
         isLoading={loading}
         isLoadingText={"Logging in"}
         size={"lg"}
         full
         onPress={handleSubmit}
       >Login</Button>
     </View>
    </AppContainer>
  )
}

export  default LoginScreen

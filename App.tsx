import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import RNBiometrics from 'react-native-simple-biometrics';


function App(): JSX.Element {


  const handleAuthentication = async () => {
  const canUseBiometric = await RNBiometrics.canAuthenticate()
    console.log('canUseBiometric', canUseBiometric)
    if(canUseBiometric){
      const result = await RNBiometrics.requestBioAuth("Autentique para continuar", "Use a autenticação biométrica para continuar")
      if(result){
        console.log('success', result)
      }else{
        console.log('error')
      }
    }
  }
  return (
    <SafeAreaView  style={styles.container}>
      <Text>POC Biometria</Text>
      <TouchableHighlight style={styles.buttonLogin}>
        <Text style={styles.buttonText} onPress={handleAuthentication}>Autenticar</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonAuth:{
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonLogin:{
    borderRadius: 6,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#0391D7'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

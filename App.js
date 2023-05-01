import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';

import storage from './utils/storage';

import { useEffect,useState } from 'react';

export default function App() {
  const [authorized,setAuthorized]=useState(true)
 
  return (
    <View style={styles.container}>
      {!!authorized?<Home></Home>:<Auth></Auth>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop:20,
    flexGrow:1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
});

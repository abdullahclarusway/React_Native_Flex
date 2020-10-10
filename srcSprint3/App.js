import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput, 
  TouchableOpacity, 
  Image, TextBase
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, backgroundColor:"red"}}>
          <View style={{flex:1, backgroundColor:"grey", margin:10, borderRadius:5, flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                  <View style={{backgroundColor:"orange", width:100, height:100, borderRadius:50, alignItems:"center", justifyContent:"center"}}>
                  <Text style={{color:"black", fontWeight:"bold"}}>
                  Orange Circle
              </Text>
                  </View>
                  <View style={{backgroundColor:"yellow", width:100, height:50, borderRadius:50, alignItems:"center" ,justifyContent:"center"}}>
                  <Text style={{color:"black", fontWeight:"bold"}}>
                  Yellow Box
              </Text>
                  </View>
          </View>
      </View>
      <View style={{flex:2, backgroundColor:"pink", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
          <View style={{backgroundColor:"black", width:200, height:350, borderRadius:20, alignItems:"center" ,justifyContent:"center"}}>
              <Text style={{color:"white"}}>
                  Black Box
              </Text>
          </View>
          <View style={{backgroundColor:"brown", width:50, height:350, borderRadius:50, alignItems:"center" ,justifyContent:"center"}}>
          <Text style={{color:"white", transform: [{ rotate: '270deg'}]}}>
                  Brown Box
              </Text>
          </View>
      </View>
        
    </SafeAreaView>
  )
};

export default App;
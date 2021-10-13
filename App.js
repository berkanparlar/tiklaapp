import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Picker, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.indexCY}>
        <Image source={require('./assets/biker.png')} style={styles.BikerImage}/>
        <View style={styles.CyView}>
          <View style={{flex:5,}}>
              <Text style={styles.CyViewHText}>SANA GELSİN</Text>
              <Text style={styles.CyViewText}>Siparişini olduğun yere getirelim.</Text>
              <Picker style={styles.CyViewText} style={{color:'white',width:'auto', marginLeft: 25, marginTop: 40,}} >
              <Picker.Item label="Küçükçekmece" value="Küçükçekmece" />
              <Picker.Item label="Şişli" value="Şişli" />
              </Picker>
          </View>
          <View style={{flex:1,}}>
              <Image source={require('./assets/greater.png')} style={{marginTop: 10,}}/>
          </View>
        </View>
      </View>
      <View style={styles.indexCG}>
        <Image source={require('./assets/restaurant.png')} style={styles.MarketImage}/>
        <View style={styles.CgView}>
          <View style={{flex:5,}}>
            <Text style={styles.CgViewHText}>Gel Al</Text>
            <Text style={styles.CgViewText}>Restorana gelmeden
            {"\n"}sipariş ver,geldiğinde
            {"\n"}hazır olsun.</Text>
          </View>
          <View style={{flex:1,}}>
              <Image source={require('./assets/greater.png')} style={{marginTop: 10,}}/>
          </View>
        </View>
      </View>
      <View style={styles.indexQR}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('./assets/qr-code.png')} style={styles.qrImage}/>
        </View>
        <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize: 12,  color:'gray'}} >Kasada ki işlemleriniz için</Text>
          <Text style={{fontSize: 30,  color:'black', fontWeight:'bold'}} >QR üretin.</Text>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('./assets/greater-b.png')} style={{width:25, height:25}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indexCY: {
    flex: 3,
    backgroundColor: '#c12a4d',
  },
  indexCG: {
    flex: 2,
    backgroundColor: '#0079b4',
  },
  indexQR: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection:'row',
  },
  BikerImage:{
    width: 80,
    height: 80,
    marginTop: 50,
    marginLeft: 25,
  },
  MarketImage:{
    width: 80,
    height: 80,
    marginTop: 25,
    marginLeft: 25,
  },
  qrImage:{
    width: 80,
    height: 80,
    
  },
  CyView:{
    flexDirection: 'row',
    flex: 6,
  },
  CgView:{
    flexDirection: 'row',
    flex: 6,
  },
  CyViewHText:{
  color: 'white',
  marginLeft: 25,
  marginTop: 20,
  fontSize: 20,
  fontWeight: 'bold',
  },
  CgViewHText:{
    color: 'white',
    marginLeft: 25,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  CyViewText:{
    color: 'white',
    marginLeft: 25,
    marginTop: 10,
  },
  CgViewText:{
    color: 'white',
    marginLeft: 25,
    marginTop: 10,
  },
});

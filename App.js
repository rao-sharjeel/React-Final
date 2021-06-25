import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomMaterialMenu from './CustomMaterialMenu.js';
import 'react-native-gesture-handler';
import { MenuProvider } from 'react-native-popup-menu';


import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export const MyMenu = () => (
  <MenuProvider>
    <YourApp />
  </MenuProvider>
);


const [modalVisible, setModalVisible] = useState(false);
function HomeScreen({ navigation }) {
  return (

    <View style = {{flex:1, }}> 


    {/* This is Top Flex */}
        <View style = {{flex:1, backgroundColor: "#39e600", flexDirection:"row"}}>
          <TouchableOpacity
          onPress={ () => navigation.openDrawer()}   
          style = {{flex: 1,}}
          >
            <Image style = {{width: 20, height: 20, alignSelf:"center", marginTop:20, }} source = {{uri: "https://icon-library.com/images/three-bar-menu-icon/three-bar-menu-icon-3.jpg"}} />

          </TouchableOpacity>

          <View style = {{flex:6}}> <Text> </Text> </View>

          <TouchableOpacity
          onPress={ () => navigation.openDrawer()}   
          style = {{flex: 1, }}
          >
            <Image style = {{width: 50, height: 50, marginTop:5}} source = {{uri: "https://icon-library.com/images/android-three-dots-icon/android-three-dots-icon-0.jpg"}} />

          </TouchableOpacity>


        </View>

        {/* This is Second Flex */}


        <View style = {{flex:1, }}>

            <View style= {{flex:1, }}></View>
            <View style= {{flex:5,  flexDirection:"row"}}>
              <View style= {{flex:1, }}></View>

              <View style= {{flex:8,  justifyContent: 'center',}}>
                <Text style= {{ fontSize: 16, alignSelf:'center' }}> Please wait create payment first:</Text>
              </View>

              <View style= {{flex:1, }}></View>
            </View>
            <View style= {{flex:1,}}></View>
            
        </View>

      
        <View style = {{flex:1,  flexDirection: 'row'}}>

          
          <View style={{flex:1,}}> <Text style={{ color: "green", alignSelf:'center', marginTop:18, fontSize:18, marginLeft:5}}>Coaching. </Text> </View>
          <View style={{flex:2, }}></View>
          <View style={{flex:1, }}>
            <TouchableOpacity
              onPress={{}}
              style={{backgroundColor: "white", borderColor:"lightgrey", borderRadius: 10, borderWidth:2, marginTop:20, paddingVertical:5}}
            >
              <Text  style = {{color: 'green', alignSelf: 'center'}}>Create +</Text>
            </TouchableOpacity>
          </View>
          
        </View>


{/* This is 4th flex */}
        <View style = {{flex:7, }}>

          
          <View style={{flex:1,  flexDirection:'row'}}>
            <View style = {{flex:1, }}>
              <Image
              source={{uri: "https://i.pinimg.com/originals/ff/22/c6/ff22c66b5f7d9b60ec981b2f7411ed0d.png"}}
              style = {{height:90, width:90, marginLeft:10, marginTop:20}}
              >

              </Image>
            </View>
            <View style = {{flex:1,}}>
               <Text 
               style = {{alignSelf:'center', color:"darkgray", backgroundColor: 'lightgray', width: 120, borderColor:'green', borderWidth:3, marginTop:60, marginLeft:30}}> SCHEDULE
               </Text> 
            </View>
          </View>
          <View style={{flex:1,  flexDirection:'row'}}>

            <View style = {{flex:1, }}>

            <Image
              source={{uri: "https://pics.freeicons.io/uploads/icons/png/2220490481555590627-512.png"}}
              style = {{height:90, width:90, marginLeft:10, marginTop:20}}
              >

              </Image>
            </View>
            <View style = {{flex:1, }}><Text 
               style = {{alignSelf:'center', color:"darkgray", backgroundColor: 'lightgray', width: 120, borderColor:'green', borderWidth:3, marginTop:60, marginLeft:30}}> DIET PLAN
               </Text></View>
          </View>

          <View style={{flex:1,  flexDirection:'row'}}>

            <View style = {{flex:1, }}>

            <Image
              source={{uri: "https://www.pngitem.com/pimgs/m/215-2156559_medical-checklist-check-list-icon-hd-png-download.png"}}
              style = {{height:120, width:90, marginLeft:10, marginTop:20}}
              >

              </Image>
            </View>
            <View style = {{flex:1,}}>
            <Text 
               style = {{alignSelf:'center', color:"darkgray", backgroundColor: 'lightgray', width: 120, borderColor:'green', borderWidth:3, marginTop:60, marginLeft:30}}> HEALTH HISTORY
               </Text>
            </View>
          </View>
         
        </View>

        {/* tHIS IS LAST VIEW */}
        <View style = {{flex:2, }}>

        {/* <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu> */}

        </View>
    </View>
    
  );
}

function NotificationsScreen({ navigation }) {


const [ap, setAp] = setState([]);
  fetchDataFromAPI()
  {
    const headers = { 
        'Authorization': 'Bearer ' + this.props.route.params.token,
        'content-type':'application/json'
    };
 
    axios.get('https://thefoodpharmacy.pk/api/auth/status/10', {headers}).
    then(response => {
      set
      if(response.data["status"] === "okay"){
        
        console.log('Data is =',response.data["response"]["message"]);
        
      }else if(response.data["status"] === "error"){
        console.log('Error is =',response.data["response"]["message"]);
      }
    }).
    catch(error => {
      Alert.alert("Error", error.message);
    });
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}></Modal>
      <Button onPress={() => fetchDataFromAPI()} title="Go back home" />


    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      
      
      >
        <Drawer.Screen name="Home" component={HomeScreen} 
        
        
        
        />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
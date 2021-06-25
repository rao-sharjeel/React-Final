// React Native Popup Menu – Over Flow Menu
// https://aboutreact.com/react-native-popup-menu/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import CustomMaterialMenu from './CustomMaterialMenu';

const FirstPage = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the First Page of the app
          </Text>
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Go to Second Page"
          />
          <CustomMaterialMenu
            //Menu Text
            menutext="Show Menu"
            //Menu View Style
            menustyle={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
            //Menu Text Style
            textStyle={{
              fontSize: 25,
              marginTop: 16,
              color: 'red',
            }}
            navigation={navigation}
            route={route}
            isIcon={false}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Popup Menu – Over Flow Menu
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

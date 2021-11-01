import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button, Switch} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import axios from 'axios';
import GetLocation from 'react-native-get-location';
import { WebView } from 'react-native-webview';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [test, settest] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (isEnabled == true) {
        get_location()
      } else {
      }
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isEnabled]);


  function get_location() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
    })
      .then(location => {
        settest(JSON.stringify(location));
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => setIsEnabled(value)}
        value={isEnabled}
      />
      <Text>{test}</Text>
    </View>
  );
}
//<WebView source={{ uri: 'https://www.google.com/maps/dir/13.7833456,100.5700176/'+"13.692000,100.430952"+'/@13.7544683,100.4631559,13z/'}} />
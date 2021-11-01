import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Page2 = ({navigation})=>{
    return(
        <View>
        <Text>Page2</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Maincontent')}/>
      </View>
    )
};

export default Page2;

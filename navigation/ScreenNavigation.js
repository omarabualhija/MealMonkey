import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Advantage_1} from '../screen/ApplicationAdvantagesScreen/Advantage_1';
import {Advantage_2} from '../screen/ApplicationAdvantagesScreen/Advantage_2';
import {Advantage_3} from '../screen/ApplicationAdvantagesScreen/Advantage_3';
import {LoginScreen} from '../screen/LoginScreen';
import {SignUPScreen} from '../screen/SignUPScreen';
import {BottomNavigation} from './BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AboutUsScreen} from '../screen/AboutUsScreen';
import React, {useState, useLayoutEffect} from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {constantStyle} from '../assets/ConstantStyle';
export function ScreenNavigation() {
  const [IsNewDownload, setIsNewDownload] = useState('');
  const [isLogeIn, setIsLogein] = useState('');

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('SignUp')}
            title="Info"
            color="#fff">
            <Icon
              color={constantStyle.ORANGE_COLOR}
              size={20}
              name={'heart'}></Icon>
          </Pressable>
        ),
      })}
      sceneContainerStyle={{
        backgroundColor: '#FFFFFF',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="AdvantageOne"
        component={Advantage_1}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AdvantageTwo"
        component={Advantage_2}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AdvantageThree"
        component={Advantage_3}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUPScreen}
      />
      <Stack.Screen
        options={{title: 'About Us'}}
        name="AboutUs"
        component={AboutUsScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomNavigation"
        component={BottomNavigation}
      />
    </Stack.Navigator>
  );
}

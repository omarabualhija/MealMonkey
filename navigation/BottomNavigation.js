import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';
import {HomeScreen} from '../screen/HomeScreen';
import {LoginScreen} from '../screen/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MenuScreen} from '../screen/MenuScreen';
import {DetailsScreen} from '../screen/DetailsScreen';
import {ListItemsScreen} from '../screen/ListItemsScreen';
import {ProfileScreen} from '../screen/ProfileScreen';
import {MoreScreeen} from '../screen/MoreScreeen';
import Icon from 'react-native-vector-icons/AntDesign';

export function BottomNavigation() {
  const {width, height} = useWindowDimensions();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#FFFFFF',
        borderTop: 0,
      }}
      screenOptions={({navigation}) => ({
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flexDirection: 'column',
        },
        headerShadowVisible: false,

        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerRightContainerStyle: {
          padding: 15,
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
        tabBarStyle: {
          position: 'absolute',
          width: width - 20,
          left: 10,
          bottom: 5,
          borderRadius: 20,
          ...styles.tabBar,
          ...styles.shadow,
        },
      })}
      initialRouteName={'Home'}
      backBehavior={'none'}>
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                resizeMode="stretch"
                style={{
                  width: 20,
                  height: 20,
                  marginBottom: 5,
                  tintColor: focused
                    ? constantStyle.ORANGE_COLOR
                    : constantStyle.GRAY_COLOR,
                }}
                source={require('../assets/image/MenueBarIcon.png')}
              />
              <Text>Menue</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Offers"
        component={ListItemsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                resizeMode="stretch"
                style={{
                  width: 20,
                  height: 20,
                  marginBottom: 5,
                  tintColor: focused
                    ? constantStyle.ORANGE_COLOR
                    : constantStyle.GRAY_COLOR,
                }}
                source={require('../assets/image/OffersBarICon.png')}
              />
              <Text>Offers</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Hi Mr Omar  !',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                ...styles.homeStyle,
                ...styles.shadow,
              }}>
              <Image
                style={{
                  marginBottom: 5,
                  tintColor: focused
                    ? constantStyle.ORANGE_COLOR
                    : constantStyle.GRAY_COLOR,
                }}
                source={require('../assets/image/HomeBarIcon.png')}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  marginBottom: 5,
                  tintColor: focused
                    ? constantStyle.ORANGE_COLOR
                    : constantStyle.GRAY_COLOR,
                }}
                source={require('../assets/image/ProfileBarIcon.png')}
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreeen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  marginBottom: 5,
                  tintColor: focused
                    ? constantStyle.ORANGE_COLOR
                    : constantStyle.GRAY_COLOR,
                }}
                source={require('../assets/image/MoreBarIcon.png')}
              />
              <Text>More</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: constantStyle.GRAY_COLOR,
    shadowOffset: {
      width: -20,
      height: -50,
    },

    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 12,
  },

  tabBar: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    height: 80,
    borderTopWidth: 0,
  },

  homeStyle: {
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    top: -35,
  },
});

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';



export const Tabs = () => {



  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}





const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = ({  }) => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      shifting={true}
      labeled={true}
      // activeColor="#FFFFFF"
      // inactiveColor="#FFFFFF"
      // barStyle={{
      //   backgroundColor: DefaultTheme,
      // }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor:colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconname: string = '';
  
          switch (route.name) {
            case 'Tab1Screen':
              iconname = 'T1';
              break;
            case 'TopTabNavigator':
              iconname = 'T2';
              break;
            case 'StackNavigator':
              iconname = 'St';
              break;
            default:
              break;
          }
  
          return <Text style={{ color }}> { iconname}  </Text>
        }
      })}
    >
      <BottomTabAndroid.Screen  name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Satck' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}



const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    // eslint-disable-next-line react-native/no-inline-styles
    sceneContainerStyle={{
      backgroundColor: 'white',
    }}
    screenOptions={ ({route}) => ({
      tabBarActiveTintColor:colores.primary,
      tabBarStyle: {
        borderTopColor: colores.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 20,
      },
      tabBarIcon: ({ color, focused, size }) => {
        let iconname: string = '';

        switch (route.name) {
          case 'Tab1Screen':
            iconname = 'T1';
            break;
          case 'Tab2Screen':
            iconname = 'T2';
            break;
          case 'StackNavigator':
            iconname = 'St';
            break;
          default:
            break;
        }

        return <Text style={{ color }}> { iconname}  </Text>
      }
    })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>MMm</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Satck' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}
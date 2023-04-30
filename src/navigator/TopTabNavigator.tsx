import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop,
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarLabelStyle: { fontSize: 20 },
        tabBarStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },
        tabBarIcon: (  ) => {
          
          let iconName: string = '';
          switch ( route.name ) {
            case 'ChatScreen':
              iconName= 'chatbox-ellipses-outline';
              break;
            case 'ContactsScreen':
              iconName='people-outline';
              break;
            case 'AlbumsScreen':
              iconName='albums-outline';
              break;
            default:
              break;
          }

          return <Icon name={ iconName } size={20} color={ colores.primary } />


        },
        tabBarShowIcon: true,
        tabBarIndicatorStyle: { backgroundColor: colores.primary },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}
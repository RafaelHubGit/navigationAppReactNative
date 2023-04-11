import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                drawerType: width > height ? 'permanent' : 'front',
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent = { (props) => <MenuInterno { ...props } /> }
        >
            <Drawer.Screen name="Tabs"  component={ Tabs } />
            <Drawer.Screen name="SettingsScreen"   component={ SettingsScreen } />
        </Drawer.Navigator>
    );
};


const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView>

            {/* pARTE DEL AVATAR  */}
            <View
                style={ styles.avatarContainer }
            >
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* OPCIONES DE MENU  */}
            <View style={ styles.menuContainer }>
                <TouchableOpacity
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate('Tabs') }
                >
                    <Text style={ styles.menuTexto }> Navegacion </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    <Text style={ styles.menuTexto }> Ajustes </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}
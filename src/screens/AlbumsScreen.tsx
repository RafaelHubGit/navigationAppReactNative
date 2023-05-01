import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { logOut, authState: { isLoggedIn } } = useContext( AuthContext )
  // const { isLoggedIn } = authState;

  return (
    <View>
        <Text> AlbumsScreen </Text>

        {
          isLoggedIn && (
            <Button 
              title="LogOut"
              onPress={ logOut }
            />
          )
        }
    </View>
  )
}

import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn, authState:{ isLoggedIn } } = useContext( AuthContext )

  return (
    <View style={ styles.globarMargin }>
        <Text style={ styles.title }> ContactsScreen </Text>

        {
          !isLoggedIn &&  <Button title="SignIn" onPress={ signIn } />
        }
        
    </View>
  )
}

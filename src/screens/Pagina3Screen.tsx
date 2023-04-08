import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ( { navigation } : Props ) => {
  return (
    <View style={ styles.globarMargin }>
        <Text style={ styles.title }> Screen 3 </Text>

        <Button
          title={ 'Regresar' }
          onPress={ () => navigation.pop() }
        />

        <Button
          title={ 'Página 1' }
          onPress={ () => navigation.popToTop() }
        />
    </View>
  )
}

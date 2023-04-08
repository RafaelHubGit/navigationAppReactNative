import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  const options: StackNavigationOptions = {
    title: 'Hola mondo',
    headerBackTitle: 'Atras',
  };
  useEffect(() => {
    navigator.setOptions(options);
  }, []);

  return (
    <View style={ styles.globarMargin }>
        <Text style={ styles.title }> Screen 2 </Text>

        <Button
          title="ir Pagina 3"
          onPress={ () => navigator.navigate( 'Pagina3Screen' ) }
        />

    </View>
  )
}

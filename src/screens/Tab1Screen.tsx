import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1 Screen');
  }, []);


  return (
    <View style={{
      ...styles.globarMargin,
      marginTop: top + 20,
    }}>
      <Text style={ styles.title }> Iconos </Text>

      <Text><Icon name="alarm" size={50} color={ colores.primary } /></Text>
    </View>
  )
}

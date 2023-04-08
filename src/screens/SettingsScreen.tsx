import React from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets(); //Es para poder trabajar con el problema del notch, solo que con este solo se puede especificar donde se quiere agregar la propiedad, en este caso marginTop: insets.top

  return (
    <View style={{ 
      ...styles.globarMargin,
      marginTop: insets.top,
    }}>
        <Text style={ styles.title} > Settings Screen </Text>
    </View>
  )
}

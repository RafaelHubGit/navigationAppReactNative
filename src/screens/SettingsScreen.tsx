import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets(); //Es para poder trabajar con el problema del notch, solo que con este solo se puede especificar donde se quiere agregar la propiedad, en este caso marginTop: insets.top

  const { authState } = useContext( AuthContext );

  

  return (
    <View style={{ 
      ...styles.globarMargin,
      marginTop: insets.top,
    }}>
        <Text style={ styles.title} > Settings Screen </Text>

        <Text style={{ fontSize: 30 }}> { JSON.stringify( authState, null, 4 ) } </Text>


        {
          authState.favoriteIcon && (
            <Icon
              name= { authState.favoriteIcon! }
              size={ 80 }
              color={ colores.primary }
            />
          )
        }
    </View>
  )
}

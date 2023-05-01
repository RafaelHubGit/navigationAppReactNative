import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1 Screen');
  }, []);


  return (
    <View style={{
      ...styles.globarMargin,
      marginTop: top + 20,
      flexDirection: 'row'
    }}>
      <Text style={ styles.title }> Iconos </Text>

      <Text>
        <TouchableIcon iconName="alarm"  />
        <TouchableIcon iconName="airplane-outline"  />
        <TouchableIcon iconName="basketball-outline"  />
        <TouchableIcon iconName="barbell-outline"  />
        <TouchableIcon iconName="car-sport-outline"  />
      </Text>
    </View>
  )
}

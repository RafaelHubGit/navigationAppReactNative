import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export const Tab2Screen = () => {

  useEffect(() => {
    console.log('Tab2 Screen');
  }, []);

  return (
    <View>
      <Text> Tab2 Screen </Text>
    </View>
  )
}

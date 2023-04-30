/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {};

export const Pagina1Screen = ( { navigation } : Props ) => {
  return (
    <View style={ styles.globarMargin }>
        <Text style={ styles.title }> Screen 1 </Text>

      <Button
        title = "Ir a página 2"
        onPress = { () => navigation.navigate( 'Pagina2Screen' ) }
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5,
      }}>
        Navegar con argumentos
      </Text>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ 
            ...styles.botonGrande,
            backgroundColor: "#5856D6"
          }}
          onPress={ () => navigation.navigate( 'PersonaScreen', {
            id: 1,
            nombre: 'Pedro',
          } ) }
        >
          <Icon name="body-outline" size={30} color="white" />
          <Text style={ styles.botonGrandeTexto }> Pedro </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{ 
            ...styles.botonGrande,
            backgroundColor: "#FF9427"
          }}
          onPress={ () => navigation.navigate( 'PersonaScreen', {
            id: 2,
            nombre: 'María',
          } ) }
        >
          <Icon name="woman-outline" size={30} color="white" />
          <Text style={ styles.botonGrandeTexto }> María </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

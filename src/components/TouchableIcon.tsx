import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props{
  iconName: string
}

export const TouchableIcon = ( { iconName }: Props ) => {

  const { changefavoriteIcon } = useContext( AuthContext )

  return (
    <TouchableOpacity
      onPress={ () => changefavoriteIcon( iconName ) }
    >
        <Icon name = { iconName }
              size={100}
              color={ colores.primary }
        />
    </TouchableOpacity>
  )
}

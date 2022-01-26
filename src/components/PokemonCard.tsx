import { Button, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { RootStackParams } from '../navigation/Navigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {};

export default function PokemonCard({navigation}:Props) {

  return (
    <>
    
    <TouchableOpacity
        style={{backgroundColor: 'red'}}
        onPress={()=>navigation.navigate('PokemonDetail')}
    >
      <Text>PokemonCard...</Text>
    </TouchableOpacity>

    <Button 
      title = 'SignOut'
      onPress={()=>navigation.navigate('SignOutScreen')}
    />

    </>
  );
}

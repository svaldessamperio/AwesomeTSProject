import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/Navigator';
import PokemonCard from '../components/PokemonCard';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{};

export default function HomeScreen({ route, navigation }: Props) {
    return (
        <View>
            <TouchableOpacity
                style={{height:100, width:100,backgroundColor:'blue'}}
                onPress={()=> navigation.navigate('PokemonScreen')}
            >
                <PokemonCard navigation={navigation} route={route}/> 
                
            </TouchableOpacity>
            
        
        </View>
    );
}

import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function SignOutScreen() {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();

  return (
    <View>
      <Text>SignOutScreen...</Text>
      <Button
        title='SignOut'
        onPress={()=>{
              signOut();
            }
        }
      />
    </View>
  );
}

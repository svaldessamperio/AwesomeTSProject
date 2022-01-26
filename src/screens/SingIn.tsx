import { View, Text, Button } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigator';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { firebaseApp } from '../utils/firebase';
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<RootStackParams, 'SignIn'> {};

export default function SingIn({ route, navigation }:Props) {

  useEffect(() => {
      // Link the credential to the current user.
      firebaseApp();
      const auth = getAuth();
      console.log('1');
      

      if (isSignInWithEmailLink(auth, 'AwesomeApp')) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = 'svaldes_samperio@hotmail.com';
    
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, 'AwesomeApp')
          .then((result) => {
            // Clear email from storage.
            console.log('logeado');
            
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
            console.log('Error: ' + error);
            
          });
      }
  }, []);

  const { signIn } = useContext(AuthContext);

  return (
    <View style={{flex:1, flexDirection:'column'}}>
      <Button
        title='SignIn'
        onPress={signIn}
      />      
      <Button
        title='SignUp'
        onPress={()=>navigation.navigate('SignUp')}
      />
      <Button
        title='RestorePassword'
        onPress={()=>navigation.navigate('RestorePassword')}
      />
    </View>
  );
}

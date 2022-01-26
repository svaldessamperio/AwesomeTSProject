import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

import SingIn from '../screens/SingIn';
import SignUp from '../screens/SignUp';
import RestorePassword from '../screens/RestorePassword';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from '../utils/firebase';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import PokemonDetail from '../screens/PokemonDetail';
import SignOutScreen from '../screens/SignOutScreen';

export type RootStackParams = {
    SignIn:undefined;
    SignUp:undefined;
    RestorePassword: undefined;
    HomeScreen: undefined;
    PokemonScreen: undefined;
    PokemonDetail: undefined;
    SignOutScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
    
    const { authState } = useContext(AuthContext);
    const { isLogedIn } = authState;

    useEffect(() => {
        firebaseApp();
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (isLogedIn) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            
            const uid = user ? user.uid : null;
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
    }, []);
    
    console.log(JSON.stringify(authState, null, 4));

    return (
        
        (!isLogedIn ? (
            <Stack.Navigator initialRouteName={'SignIn'}>
                <Stack.Screen name="SignIn" component={SingIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="RestorePassword" component={RestorePassword} />
            </Stack.Navigator>
        ) : (
            <Stack.Navigator initialRouteName={'HomeScreen'}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
                <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
                <Stack.Screen name="SignOutScreen" component={SignOutScreen} />
            </Stack.Navigator>
        ))
    );
}

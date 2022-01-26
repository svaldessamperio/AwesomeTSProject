import { AuthState } from './AuthContext';

type authAction = { type: 'signIn' | 'signOut' };

export const authReducer = (state: AuthState, action: authAction) : AuthState => {
    
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLogedIn: true,
                userName: 'No Yet',
            }
            break;
        case 'signOut':
            return {
                ...state,
                isLogedIn: false,
                userName: 'Se salió',
            }
        default:
            return state;
    }
    
}
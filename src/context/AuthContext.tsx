import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


// define como luce, que info se tendra aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: String;
    favoriteIcon?: String;
}

// Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false, 
    userName: undefined,
    favoriteIcon: undefined
}

// decirle a React que va a exponer el context 
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changefavoriteIcon: (iconName: string) => void;
    changeUsername: (userName: string) => void;
}


//crear contexto
export const AuthContext = createContext( {} as AuthContextProps );

//Componente proveedor del estado 
export const AuthProvider = ( { children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const logOut = () => {
        dispatch({ type: 'logOut' });
    }

    const changefavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    }

    const changeUsername = ( userName: string ) => {
        dispatch({ type: 'changeUserName', payload: userName })
    } 

    return (
        <AuthContext.Provider value={{
            authState,
            signIn: signIn,
            logOut,
            changefavoriteIcon,
            changeUsername
        }}
        >
            { children }
        </AuthContext.Provider>
    )
}
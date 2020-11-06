import React, { useEffect, useRef } from 'react'
import { Plugins } from '@capacitor/core';
import { useState } from 'react'
import AppContext, { User, defaultUser } from './app-context'

const { Storage } = Plugins;

const AppContextProvider : React.FC = (props) => {

    const [user, setUser] = useState<User>(defaultUser);
    const didMountRef = useRef(false);
    
    useEffect(() => {
        if(didMountRef.current){
            console.log("didmout true")
            Storage.set({key: 'user', value: JSON.stringify(user)})
        }else{
            console.log("didmout false")
            didMountRef.current = true
        }
    }), [user]
    
    const updateUser = (updateUser: User) => {
        setUser(updateUser);
    }

    const initContext = async () => {
        const userData = await Storage.get({key: 'user'})
        const storedUser = userData.value ? JSON.parse(userData.value) : defaultUser;
        didMountRef.current = false
        setUser(storedUser)
    }

    return <AppContext.Provider value={{ initContext, user, updateUser }}>
        {props.children}
    </AppContext.Provider>
}


export default AppContextProvider;
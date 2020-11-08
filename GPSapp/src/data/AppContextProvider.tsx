import React, { useEffect, useRef } from 'react'
import { Plugins } from '@capacitor/core';
import { useState } from 'react'
import AppContext, { User, Position, defaultUser, defaultPosition } from './app-context'

const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {

    const [user, setUser] = useState<User>(defaultUser);
    const [position, setPosition] = useState<Position>(defaultPosition);
    const didMountRef = useRef(false);

    useEffect(() => {
            console.log(user)
            Storage.set({ key: 'user', value: JSON.stringify(user) })
            Storage.set({ key: 'position', value: JSON.stringify(position) })
    }, [user, position] )

    const updateUser = (updateUser: User) => {
        setUser(updateUser);
    }

    const updatePosition = (updatePosition: Position) => {
        console.log(updatePosition)
        setPosition(updatePosition);
    }

    const initContext = async () => {
        const userData = await Storage.get({ key: 'user' })
        const storedUser = userData.value ? JSON.parse(userData.value) : defaultUser;
        const positionData = await Storage.get({ key: 'position' })
        const storedPosition = positionData.value ? JSON.parse(positionData.value) : defaultPosition;
        didMountRef.current = false
        setUser(storedUser)
        setPosition(storedPosition);
    }

    return <AppContext.Provider value={{ initContext, user, updateUser, position, updatePosition }}>
        {props.children}
    </AppContext.Provider>
}


export default AppContextProvider;
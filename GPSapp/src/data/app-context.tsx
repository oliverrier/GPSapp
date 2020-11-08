import React from 'react';

export interface User {
    name: string,
}

export interface Position {
    latitude: number,
    longitude: number
}

export const defaultUser: User = {
    name: "John Doe",
}

export const defaultPosition: Position = {
    latitude: 0.0,
    longitude: 0.0
}

interface AppContext {
    initContext: () => void,
    user: User,
    updateUser: (updatedUser: User) => void,
    position: Position,
    updatePosition: (updatePosition: Position) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    user: defaultUser,
    updateUser: () => { },
    position: defaultPosition,
    updatePosition: () => { }
})


export default AppContext
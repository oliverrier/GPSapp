import React from 'react';

export interface User {
    name: string,
}

export const defaultUser: User = {
    name: "John Doe",
}

interface AppContext {
    initContext: () => void,
    user: User,
    updateUser: (updatedUser: User) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    user: defaultUser,
    updateUser: () => { }
})


export default AppContext
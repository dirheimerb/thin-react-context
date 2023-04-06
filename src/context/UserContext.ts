import React from 'react';
import { User } from 'thin-backend';


export interface UserContext {
    user: User | null;
    userId: string | null;
    setUser: (user: User | null) => void;
    setUserId: (userId: string | null) => void;
}

export const UserContext = React.createContext<UserContext>({
    user: null,
    userId: null,
    setUser: () => {},
    setUserId: () => {},
});


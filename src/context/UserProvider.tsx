import React from "react";
import { getCurrentUser, getCurrentUserId, User } from "thin-backend";
import { UserContext } from "./UserContext";

export interface UserContextProviderProps {
    children: React.ReactNode;
}

export default function UserContextProvider(props: UserContextProviderProps) {
    const [user, setUser] = React.useState<User | null>(null);
    const [userId, setUserId] = React.useState<string | null>(null);

    React.useEffect(() => {
        const userId = getCurrentUserId();
        if (userId) {
            setUserId(userId);
            getCurrentUser().then((user) => {
                setUser(user);
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, userId, setUser, setUserId }}>
            {props.children}
        </UserContext.Provider>
    );
}
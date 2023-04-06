declare module 'thin-backend' {
    type UUID = string;
    type TableName = "users"
        interface User {
        id: UUID;
        email: string;
        passwordHash: string;
        lockedAt: string | null;
        failedLoginAttempts: number;
        accessToken: string | null;
        confirmationToken: string | null;
        isConfirmed: boolean;
        googleUserId: string | null;
    }
    type IHPRecord<table> = table extends "users" ? User : never;

      /**
     * A User object not yet inserted into the `users` table
     */
    interface NewUser {
        id?: UUID;
        email: string;
        passwordHash: string;
        lockedAt?: string | null;
        failedLoginAttempts?: number;
        accessToken?: string | null;
        confirmationToken?: string | null;
        isConfirmed?: boolean;
        googleUserId?: string | null;
    }

    function getCurrentUserId(): string;
    function getCurrentUser(): Promise<User | null>;
}
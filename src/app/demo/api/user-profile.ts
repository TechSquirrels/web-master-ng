export interface UserProfile{
    username: string;
    email: string;
    password: string;
    id: number;
    token: string;
    scheduleId: number;
    groups: number[];
}

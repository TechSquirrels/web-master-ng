
interface permission{
    id:number;
}
export interface Group {
    id?: number;
    name: string;
    numberOfParticipants: number;
    userIds: number[];
    permissions?: permission[];
}



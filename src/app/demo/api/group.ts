
interface permission{
    id:number;
}
export interface Group {
    id?: number;
    name: string;
    no_part: number;
    userIds: number[];
    permissions?: permission[];
}



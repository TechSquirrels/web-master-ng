interface ActivityId {
    id: number
}
export interface Schedule{
    id: number,
    name: string,
    activities: ActivityId[]
}

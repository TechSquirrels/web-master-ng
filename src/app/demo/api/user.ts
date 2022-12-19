interface GroupId {
    id: number
}

interface UserPermission {
    id: number
}
export interface User {
    id: number,
    password: string,
    last_login: string,
    is_superuser: false,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    is_staff: boolean,
    is_active: boolean,
    date_joined: string,
    description: string,
    scheduleId: number,
    groupIDS: GroupId[],
    user_permissions: UserPermission

}

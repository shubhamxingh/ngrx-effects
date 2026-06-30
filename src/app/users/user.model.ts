export interface User{
    id: string,
    name: string,
    email: string,
    phone: number,
    username: string,
    website?: string,
    company?: Company,
    address?: Address,
}

export interface Address{
    city: string,
    geo?: {
        lat: string,
        lng: string
    },
    street?: string,
    suite?: string,
    zipcode: number
}

export interface Company{
    bs?: string,
    catchPhrase?: string,
    name: string
}

export interface UserState{
    users: User[],
    loading: boolean,
    error: string
}
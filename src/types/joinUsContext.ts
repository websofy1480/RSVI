export interface joinus {
    _id?: string,
    name: string,
    phone: string,
    department: string,
    message: string,
    createdAt: string,
}

export interface JoinUsProps {
    joinUsData: joinus[]
};
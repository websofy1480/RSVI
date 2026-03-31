export interface collaborate {
    _id:string,
    name: string,
    email: string,
    phone: string,
    collaborationsType: string,
    message: string,
    isVerified: boolean,
    image: string,
}

export interface CollaborateProps {
    collaborateData : collaborate[]
}
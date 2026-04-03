export interface collab {
    _id?: string,
    name: string,
    email: string,
    phone: string,
    collaborationsType: string,
    message: string,
    isVerified: boolean,
    image: string,
    image_publicId: string,
    createdAt: string,
}

export interface CollabProps {
    collabData: collab[]
};
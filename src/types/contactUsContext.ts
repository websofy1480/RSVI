export interface contactUs {
    _id?: string,
    name: string,
    phone: string,
    email: string,
    message: string,
    createdAt: string,
}

export interface ContactUsProps {
    contactUsData: contactUs[]
};
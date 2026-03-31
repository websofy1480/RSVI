export interface initiatives {
    _id: string,
    title: string,
    description: string,
    initiativesType: string,
    category: string,
    image: string,
    image_publicId: string,
};

export interface InitiativeProps {
    initiativesData: initiatives[]
};
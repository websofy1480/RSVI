export interface initiatives {
    _id?: string,
    title: string,
    description: string,
    initiativesType?: string,
    category?: string,
    awardYear?: string,
    image: string,
    image_publicId: string | null,
};

export interface InitiativeProps {
    initiativesData: initiatives[]
};
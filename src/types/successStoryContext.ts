export interface successStory {
    _id?: string,
    title?: string,
    name?: string,
    description: string,
    image: string
    image_publicId?: string | null
};

export interface SuccessStoryProps {
    successStoryData?: successStory[]
    activitiesData?: successStory[]
};
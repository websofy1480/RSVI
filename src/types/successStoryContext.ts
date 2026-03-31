export interface successStory {
    _id: string,
    title?: string,
    name: string,
    description: string,
    image: string
};

export interface SuccessStoryProps {
    successStoryData?: successStory[]
    activitiesData?: successStory[]
};
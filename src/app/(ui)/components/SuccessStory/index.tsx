import { getData } from '@/lib/getData';
import { UserSuccessStory } from './UserSuccessStory';
import SuccessStory from '@/models/admin-model/SuccessStory';

export const SuccessStoryPage: React.FC = async () => {
    const successStoryData = await getData(SuccessStory);
    return <UserSuccessStory successStoryData={successStoryData} />
}

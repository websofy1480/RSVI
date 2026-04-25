import Initiative from '@/models/admin-model/Initiative'
import { getData } from '@/lib/getData'
import { Trainings } from './Trainings';

export const TrainingsPage: React.FC = async () => {
    const initiativesData = await getData(Initiative);
    return <Trainings initiativesData={initiativesData} />
}
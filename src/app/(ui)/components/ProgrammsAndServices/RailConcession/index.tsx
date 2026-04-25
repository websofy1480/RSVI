import Initiative from '@/models/admin-model/Initiative'
import { getData } from '@/lib/getData'
import { RailConcession } from './RailConcession';

export const RailConcessionPage: React.FC = async () => {
    const initiativesData = await getData(Initiative);
    return <RailConcession />
}
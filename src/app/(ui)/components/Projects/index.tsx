import { getData } from '@/lib/getData';
import Initiative from '@/models/admin-model/Initiative';
import { InitiativeProps } from '@/types/initiativesContext';
import { Projects } from './Projects';

export const ProjectsPage = async () => {
    const initiativesData = await getData(Initiative);

    return <Projects initiativesData={initiativesData} />
}

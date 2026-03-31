import Initiative from '@/models/admin-model/Initiative'
import { Initiatives } from './Initiatives'
import { getData } from '@/lib/getData'

export const InitiativesPage = async () => {
    const initiativesData = await getData(Initiative);
    return <Initiatives initiativesData={initiativesData} />
}

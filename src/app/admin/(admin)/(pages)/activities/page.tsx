import Activity from '@/app/admin/components/activities/Activities';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Activities | RSVI"
};

const page = () => {
    return <Activity />
}

export default page
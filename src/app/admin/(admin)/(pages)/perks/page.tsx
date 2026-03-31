import Perks from '@/app/admin/components/perks/Perks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Perks | RSVI"
};

const page = () => {
  return <Perks/>
}

export default page
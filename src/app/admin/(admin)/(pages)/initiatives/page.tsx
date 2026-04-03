import { Initiatives } from '@/app/admin/components/initiatives/Initiatives';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Initiatives | RSVI"
};

const page = () => {
  return <Initiatives />
}

export default page
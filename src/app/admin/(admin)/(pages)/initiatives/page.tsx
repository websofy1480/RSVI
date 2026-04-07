import { Initiatives } from '@/app/admin/components/initiatives/Initiatives';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Initiatives | RSVI"
};

const page: React.FC = () => {
  return <Initiatives />
}

export default page
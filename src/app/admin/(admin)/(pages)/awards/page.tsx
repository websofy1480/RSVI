import { Awards } from '@/app/admin/components/awards/Awards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Awards | RSVI"
};

const page: React.FC = () => {
  return <Awards />
}

export default page
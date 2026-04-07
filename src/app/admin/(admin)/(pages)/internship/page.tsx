import { Internship } from '@/app/admin/components/internship/Internship';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Internship | RSVI"
};

const page: React.FC = () => {
  return <Internship />
}

export default page
import { CollaboratorPage } from '@/app/admin/components/collaborator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Collaborator | RSVI"
};

const page: React.FC = () => {
  return <CollaboratorPage />
}

export default page
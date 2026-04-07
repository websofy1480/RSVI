import { ContactUsPage } from '@/app/admin/components/contact-us';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Contact Us | Stintwol"
};

const page: React.FC = () => {
  return <ContactUsPage />
}

export default page
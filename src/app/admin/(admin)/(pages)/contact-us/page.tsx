import { ContactUsPage } from '@/app/admin/components/contact-us';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Contact Us | Stintwol"
};

const page = () => {
  return <ContactUsPage/>
}

export default page
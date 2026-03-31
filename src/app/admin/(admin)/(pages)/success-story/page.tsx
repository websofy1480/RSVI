
import SuccessStory from '@/app/admin/components/success-story/SuccessStory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Success Strory | RSVI"
};

const page = () => {
  return <SuccessStory />
}

export default page
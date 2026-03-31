import JoinUsRequest from '@/app/admin/components/join-us-request/JoinUsRequest';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join Us Request | RSVI"
};

const page = () => {
  return <JoinUsRequest/>
}

export default page
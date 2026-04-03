import { JoinUsRequestPage } from '@/app/admin/components/join-us-request';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Join Us Request | RSVI"
};

const page = () => {
  return <JoinUsRequestPage/>
}

export default page
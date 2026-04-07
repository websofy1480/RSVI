import { Blog } from '@/app/admin/components/blog/Blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blogs | Stintwol",
};

const page: React.FC = () => {
  return <Blog />
}

export default page
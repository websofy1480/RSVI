import { BlogCategory } from '@/app/admin/components/blog-category/BlogCategory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Category | RSVI"
};

const page: React.FC = () => {
  return <BlogCategory />
}

export default page
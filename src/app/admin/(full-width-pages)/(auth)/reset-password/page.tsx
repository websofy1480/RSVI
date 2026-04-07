
import { ResetPassword } from '@/app/admin/components/auth/ResetPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reset Password | RSVI"
};

const ResetPasswords: React.FC = () => <ResetPassword />;

export default ResetPasswords;
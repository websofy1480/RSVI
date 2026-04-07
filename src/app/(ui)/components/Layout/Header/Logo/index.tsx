import Image from 'next/image';
import Link from 'next/link';

export const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/images/logo/rsvi-logo.png"
        alt="logo"
        width={160}
        height={50}
        quality={100}
        className='sm:w-16 w-10'
        loading="eager"
      />
    </Link>
  );
};

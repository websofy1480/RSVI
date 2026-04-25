import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { HeaderItem } from '@/types/menu';
import { useData } from '@/app/context/DataContext';

export const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { setNavbarOpen } = useData();

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const router = useRouter();

  const handleNavigate = () => {
    router.push(item.href);
    setNavbarOpen(false);

  }

  const handleSubMenuNavigate = (subMenuHref: string) => {
    router.push(subMenuHref);
    setNavbarOpen(false);
    setSubmenuOpen(false);
  }

  const path = usePathname();

  return (
    <div className="relative w-full">
      <button
        onClick={item.submenu ? handleToggle : handleNavigate}
        className={`flex items-center justify-between w-full py-2 text-black focus:outline-none ${path == item.href ? '!text-primary' : null} ${path.startsWith(`/${item.label.toLowerCase()}`) ? '!text-primary' : null}`}
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <button key={index} onClick={() => handleSubMenuNavigate(subItem.href)} className="block py-2 text-gray-500 hover:bg-gray-200">
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


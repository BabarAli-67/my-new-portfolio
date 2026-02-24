import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '@/types/menu';
import { useRouter } from 'next/router';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter();
  const path = router?.pathname || '';

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative block w-full">
      <button
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey focus:outline-hidden ${path === item.href ? 'bg-primary text-white dark:text-white!' : ''} ${path.startsWith("/blog") && item.href === "/blog" ? "bg-primary! text-white dark:text-white!" : ""} ${path.startsWith("/portfolio") && item.href === "/portfolio" ? "bg-primary text-white dark:text-white!" : ""}`}
      >
        <Link href={item.href} className="w-full text-left">
          {item.label}
        </Link>
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="bg-white dark:bg-darklight p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href} className="block py-2 text-gray-500 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-midnight_text">
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;


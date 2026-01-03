import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link 
      href="/" 
      className="text-2xl font-bold text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200">
      MyPortfolio
    </Link>
  );
};

export default Logo;


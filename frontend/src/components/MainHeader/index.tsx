import Link from 'next/link';
import { Button, PopLogo } from '..';
import Navbar from './Navbar';

const navItems = [
  {
    href: 'about',
    name: 'About Us',
  },
  {
    href: 'features',
    name: 'Features',
  },
  {
    href: 'contact',
    name: 'Contact Us',
  },
  {
    href: 'policy',
    name: 'Privacy Policy',
  },
];

const MainHeader = () => {
  return (
    <main className="pt-2 pb-2">
      {/* navigation */}
      <nav className="flex items-center justify-between relative">
        <PopLogo />

        <div className="flex items-center gap-x-4 first:gap-x-0 phone:hidden">
          {navItems.map((nav) => (
            <Link key={nav.href} href={`/${nav.href}`}>
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="phone:hidden">
          <Button title="Get Started" />
        </div>

        <div className="phone:block hidden">
          <Navbar />
        </div>
      </nav>
    </main>
  );
};

export default MainHeader;

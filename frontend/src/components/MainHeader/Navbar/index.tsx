import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../icons/logo';

export const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

const navItems = [
  // {
  //   href: 'about',
  //   name: 'About Us',
  // },
  // {
  //   href: 'features',
  //   name: 'Features',
  // },
  // {
  //   href: 'contact',
  //   name: 'Contact Us',
  // },
  {
    href: 'policy',
    name: 'Privacy Policy',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {isMenuOpen && (
        <div className="bg-white z-50 absolute top-0 right-0 shadow-2xl p-4 w-full">
          <div className="flex items-center justify-between mb-4">
            <Logo />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => closeMenu()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className=" flex items-start flex-col gap-y-4">
            <div
              className="flex items-start flex-col"
              onClick={() => closeMenu()}
            >
              {navItems.map((nav) => (
                <Link
                  key={nav.href}
                  href={`/${nav.href}`}
                  className="my-4 first:my-0"
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            <button className="bg-primary text-white rounded-md flex items-center justify-center mx-auto w-full py-[11px] gap-x-4">
              {/* <Button title="Get Started" /> */}
              <span className="font-bold">Get Started</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

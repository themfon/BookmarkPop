import Link from 'next/link';

const navigation = [
  { name: 'About Us', href: '/about', current: false },
  { name: 'Features', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
  { name: 'Terms of Service', href: '#', current: false },
  { name: 'FAQs', href: '#', current: false },
  { name: 'Privacy Policy', href: '#', current: false },
];

const Footer = () => {
  const navGroup1 = navigation.slice(0, 3);
  const navGroup2 = navigation.slice(3, 6);
  return (
    <div className="bg-primary text-white py-[56px]">
      <div className="max-w-[90%] mx-auto flex justify-between phone:flex-col">
        {/* <h2 className="phone:hidden">Bookmark Pop</h2> */}
        {/* <div className="flex items-center gap-x-10 phone:flex-col phone:mb-4 phone:gap-y-4">
          <nav className="flex items-start flex-col gap-y-2 phone:flex-row phone:gap-x-4">
            {navGroup1.map(({ name, href, current }, i) => (
              <Link key={i} href={href} className="text-[14px]">
                {name}
              </Link>
            ))}
          </nav>
          <nav className="flex items-start flex-col gap-y-2 phone:flex-row phone:gap-x-4">
            {navGroup2.map(({ name, href, current }, i) => (
              <Link key={i} href={href} className="text-[14px]">
                {name}
              </Link>
            ))}
          </nav>
        </div> */}
        <div className="text-center mx-auto">
          <div>
            <small className="block text-sm">&copy; Bookmark Pop</small>
            <small className="text-sm">All Rights Reserved</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Dispatch, SetStateAction } from 'react';

interface IHamburger {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
  setIsMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({
  isMenuOpen,
  onToggleMenu,
  setIsMenuIsOpen,
}: IHamburger) => {
  return (
    <>
      {isMenuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuIsOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => onToggleMenu()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </>
  );
};

export default Hamburger;

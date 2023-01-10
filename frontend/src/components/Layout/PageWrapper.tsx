import { Footer, MainHeader } from '../index';

interface LayoutProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="max-w-[80%] mx-auto">
        <MainHeader />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;

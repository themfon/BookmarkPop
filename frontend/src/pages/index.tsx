/* eslint-disable react/no-unescaped-entities */
import {
  DownloadCard,
  MainFAQ,
  NotificationCard,
  OrganizeCard,
  PageWrapper,
  PersonCard,
} from '../components';
import BalanceText from 'react-wrap-balancer';
import Image from 'next/image';
import VidIcon from '../components/icons/video';

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-hero-img bg-no-repeat bg-cover pb-10">
        <section className="py-4 flex items-center justify-between phone:flex-col max-w-[80%] mx-auto">
          <div className="max-w-lg phone:order-2">
            <h2 className="font-bold text-center sm:text-3xl text-2xl sm:text-left">
              {' '}
              A stress-free way of organizing and accessing{' '}
              <span className="text-primary">bookmarked</span> Tweets
            </h2>
            <p className="pt-4 text-center sm:text-left">
              <BalanceText ratio={0.5}>
                All in one tweet bookmark manager that allows you to bookmark
                tweets, organize and access them in one place.
              </BalanceText>
            </p>

            <button className="heroBtn phone:mx-auto phone:w-full phone:justify-center flex items-center gap-x-4 mt-4 text-white px-[24px] py-[16px] bg-primary rounded-lg">
              <VidIcon />
              <button>How it works</button>
            </button>
          </div>

          {/* hero image */}
          <div className="sm:block phone:order-1">
            <Image
              src={'/heroImg.svg'}
              alt="book icon representing bookmark pop"
              width={611}
              height={400}
            />
          </div>
        </section>
      </div>

      <section className="pt-4 sm:max-w-[80%] sm:mx-auto">
        <div className="text-center phone:w-full sm:max-w-2xl sm:mx-auto mb-4">
          <h2 className="font-bold sm:text-2xl text-lg text-primary mb-4">
            Do more than just bookmark tweets
          </h2>
          <p>
            <BalanceText ratio={0.5}>
              {
                "You bookmarked tweets can be overwhelming to manage with so many tweets to navigate without any control. Bookmark Pop eases this process and makes sure you don't miss anything"
              }
            </BalanceText>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
          <div className="bg-featuresBg phone:w-full phone:px-8 flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Personalized Dashboard</h3>
            <p className="my-2">
              {' '}
              <BalanceText>
                {' '}
                Access bookmarks seamlessly on a dashboard that allows you to
                manage tweets according to your preferences.{' '}
              </BalanceText>
            </p>
            <PersonCard />
          </div>
          <div className="bg-featuresBg phone:w-full phone:px-8 flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Organize with Ease</h3>
            <p className="my-2 text-center">
              <BalanceText>
                Search, sort and create collections with tags. Add up to seven
                tags and arrange them however you see fit.
              </BalanceText>
            </p>
            <OrganizeCard />
          </div>
          <div className="bg-featuresBg phone:w-full phone:px-8 flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Notifications</h3>
            <p className="my-2 sm:text-center">
              <BalanceText>
                {' '}
                Get notified of important Tweets by adding them to Google
                calendar. Bookmark Pop ensures you do not miss any important
                tweets
              </BalanceText>
            </p>
            <NotificationCard />
          </div>
          <div className="bg-featuresBg phone:w-full phone:px-8 flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Download Bookmarked Tweets</h3>
            <p className="my-2">
              <BalanceText>
                {' '}
                Download bookmarked tweets in various formats and access on the
                go
              </BalanceText>
            </p>
            <DownloadCard />
          </div>
        </div>
      </section>

      <section className="faqBackground bg-cover bg-no-repeat bg-right-bottom overflow-hidden relative">
        <div className="text-center py-8 phone:max-w-[80%] phone:mx-auto mb-4">
          <h2 className="font-bold sm:text-2xl text-lg text-white mb-4">
            FAQs
          </h2>
          <p className="text-white sm:text-base text-xl font-light">
            Find answers to your most pertinent questions about Bookmark Pop
          </p>
        </div>
        <MainFAQ />
      </section>

      <section className="callToAction py-16">
        <div className="text-center max-w-[80%] mx-auto">
          <h2 className="font-bold text-center text-2xl text-primary mb-4">
            Launching soon
          </h2>
          <p>
            {
              "We are almost done building the twitter bookmark manager you've been waiting for. Sign up for early access!"
            }
          </p>

          <p className="font-bold mt-2">
            <BalanceText>Subscribe to get notified of new releases</BalanceText>
          </p>

          <div className="border border-[#338DF7] sm:w-[800px] mx-auto mt-4 h-[50px] flex items-center justify-between rounded-md">
            <input
              type="email"
              placeholder="email"
              className="sm:w-3/4 w-3/6 rounded-md h-full outline-none border-none focus-within:outline-none indent-4"
            />
            <div className="w-3/6 sm:w-1/4 h-full">
              <button className="bg-mainBlue text-white px-4 w-full rounded-r-md h-[100%]">
                Join the waiting list
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;

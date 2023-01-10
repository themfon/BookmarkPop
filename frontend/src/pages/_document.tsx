import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

const descriptionContent =
  'The Bookmark Pop website is one place where you can get access to all our Twitter bookmarks. Save important bookmarks in an external place where you can further organize or set reminders for when to read them';
const titleContent = 'All your Twitter bokmarks in one lace';
const urlContent = 'bookmarkpop.vercel.app';

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={descriptionContent} />
        <meta name="author" content="Bookmark Pop" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlContent} />
        <meta property="og:title" content={titleContent} />
        <meta property="og:description" content={descriptionContent} />
        <meta property="og:image" content="/static/gh_banner.png" />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={urlContent} />
        <meta property="twitter:title" content={titleContent} />
        <meta property="twitter:description" content={descriptionContent} />
        <meta property="twitter:image" content="/static/gh_banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

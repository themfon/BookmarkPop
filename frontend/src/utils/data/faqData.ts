interface IFAQ {
  id: string;
  question: string;
  response: string;
}

export const faqData: IFAQ[] = [
  {
    id: '0',
    question: 'What is Bookmark Pop?',
    response:
      'Bookmark Pop is a Twitter bookmark manager that fetches bookmarked tweets to a personalized dashboard, sends notifications about bookmarked tweets, organizes bookmarked tweets and allows you search for bookmarked tweets with keywords and download them as files.',
  },
  {
    id: '1',
    question: 'How do I import my bookmarked tweets to Bookmark Pop?',
    response:
      'Sign up with Bookmark Pop and authorized Bookmark Pop to access your Twitter accounts. This automatically connects your twitter to Bookmark Pop and this gives you access to import tweets on your Bookmark Pop dashboard using the “Import button” or import bookmarked tweets dircetly from Twitter using Bookmark Pop BOT',
  },
  {
    id: '2',
    question: 'How do I import tweets using Bookmark pop BOT on Twitter?',
    response:
      'All in one tweet bookmark manager that allows you bookmark tweets, organize them and access them in one place.',
  },
  {
    id: '3',
    question: 'How do i organize twitter bookmarks with tags?',
    response:
      'You can create up to seven tags to hold your bookmarked tweets depending on the type of content and also rename as you like. Move imported tweets to any tag of yor choice to keep your dashboard tidy and organized.',
  },
  {
    id: '4',
    question: 'How does the download feature works?',
    response:
      'There is a download icon on each tweet bookmarked that allows you download tweets to your local file in PDF format.',
  },
  {
    id: '5',
    question: 'Can I access Twitter from Bookmark Pop?',
    response:
      'Each individual bookmarked tweet  has the Twitter icon that allows you view the particular tweet on Twitter and also redirects you to Twitter if you wish to engage with the tweet.    ',
  },
];

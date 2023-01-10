import Head from 'next/head';

interface IPageSEO {
  title: string;
  description: string;
}

const PageSEO = ({ description, title }: IPageSEO) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default PageSEO;

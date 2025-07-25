import Head from "next/head";

interface SEOHeadProps {
  SEOData: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const SEOHead = ({ SEOData }: SEOHeadProps) => {
  const { title, description, keywords } = SEOData;
  const keywordsString = keywords.join(", ");

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
    </Head>
  );
};

export default SEOHead;

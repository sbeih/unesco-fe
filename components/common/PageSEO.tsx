import Head from "next/head";

interface IPageSEOProps {
  title: string;
  description: string;
  url?: string;
}

export const PageSEO: React.FC<IPageSEOProps> = ({
  title,
  description,
  // -- mocked -- //
  url = "https://moc.ps",
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description}></meta>
    <meta property="og:title" content={title}></meta>
    <meta property="og:description" content={description}></meta>
    <meta property="og:url" content={url}></meta>
    <meta property="og:tag" content={"website"}></meta>
  </Head>
);

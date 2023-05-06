import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Mitch Hein Portfolio`}
      </title>
    </Head>
  </>
);

export default Seo;

import Link from 'next/link';
import Head from 'next/head';

function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Us Page" />
      </Head>
      <div>
        <h1>About Us</h1>
      </div>

      <Link href="/">
        <h3>Back to Home</h3>
      </Link>
    
    </>
  );
}

export default AboutUs;
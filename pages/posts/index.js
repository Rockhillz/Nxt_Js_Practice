import Head from "next/head";
import Layout from "../../components/Layout";

const Post = () => {
  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
        <meta
          name="description"
          content="This is a blog post about something important."
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

     <div className="mx-32 mt-10">
      <h2 className="text-green-300">Date: 2022-01-01</h2>
        <h2>Author: John Doe</h2>
        <h1>Post Title</h1>
        <p>Post Content</p>
     </div>
    </Layout>
  );
};

export default Post;

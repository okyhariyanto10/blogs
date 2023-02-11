import Layout from "../components/Layout";
import FeaturedPost from "../components/FeaturedPost";
import mockPost from "../utils/post.json"
import CardPost from "../components/CardPost";
import { useState } from "react";
import Container from "../components/Container";
import Head from "next/head";

export default function Home() {
  const [posts, setPost] = useState(mockPost);
  return (
    <Layout>
      <Head>
        <title>Home &mdash Frozen Food Hariyanto</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-4 mt-6">
          {posts.map((post) => (
            <div key={post.id} className=" md:w-4/12 w-full py-6 px-4">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

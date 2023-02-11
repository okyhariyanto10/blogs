import Layout from "../components/Layout";
import CardPost from "../components/CardPost";
import Container from "../components/Container";
import mockPost from "../utils/post.json";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Head from "next/head";
// import { json } from "stream/consumers";

export default function Posts() {
  const [posts, setPost] = useState([]);
  return (
    <Layout>
      <Head>
        <title>Post Frozen Food Hariyanto</title>
      </Head>
      <Container>
        <SectionHeader />
        {!posts.length ? (
          <div className="text-center text-white py-20">
            <h2 className="text-6xl mb-4">No result 😥</h2>
            <p className="text-xl md:w-6/12 w-full mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4 mt-6">
            {posts.map((post) => (
              <div key={post.id} className=" md:w-4/12 w-full py-6 px-4">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}

"use client";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home({posts}) {
const [count, setCount] = useState(0);

useEffect(() => {
  const timer = setInterval(() => setCount(n => n+1), 1000)
  return () => {
    clearInterval(timer)
  }
}, [])
  return (
    <>
      <Head>
        <title>My Great blog</title>
      </Head>
      <h1>Count : {count}</h1>
      {/* <ul>
        {posts.map((post) => (
          <li>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export async function getStaticProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
  .then((r) => r.json())
  return {
    props : {
      posts
    }
  }
}

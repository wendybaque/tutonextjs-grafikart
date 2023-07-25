"use client";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <Head>
        <title>My Great blog</title>
      </Head>
      <h1>Count : {count}</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/blog/${post.id}`} alt="">
              <a>
                <h3>
                  {post.id} - 
                  {post.title}
                </h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
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

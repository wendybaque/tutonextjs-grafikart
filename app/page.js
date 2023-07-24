"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

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
      <ul>
        {posts.map((post) => (
          <li>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}

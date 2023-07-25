import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <main>
        <Link href="/" alt="">
          <a>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </a>
        </Link>
      </main>
    </>
  );
}

// export async function getStaticProps({ params }) {
//   const posts = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   ).then((r) => r.json());
//   return {
//     props: {
//       post,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    ).then((r) => r.json());
    return {
      props: {
        post,
      },
    };
  }

// export async function getStaticPaths() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//     (r) => r.json()
//   );
//   return {
//     paths: posts.map((post) => ({
//       params: { id: post.id.toString() },
//     })),
//     fallback: false,
//   };
// }

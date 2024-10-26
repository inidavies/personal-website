import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Projects</h1>
      <ul>
        <h3>
          <Link href="/projects/project1">Project 1</Link>
        </h3>
      </ul>
    </Layout>
  );
}

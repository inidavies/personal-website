import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ini Davies</title>
      </Head>
      <h1>Ini Davies</h1>
      <Image src="/images/profile.jpg" height={144} width={144} alt="Ini" />
      <h2>
        <Link href="/projects">Project Page</Link>
      </h2>
    </>
  );
}

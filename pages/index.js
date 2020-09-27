import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import MediumLink from "../src/components/MediumLink";

export default function Home() {
  const { data } = useSWR(`/api/readfiles`, (url) => fetch(url).then((res) => res.json()));

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js - Read files in API route</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"} />
      </Head>

      <MediumLink href={'https://medium.com/@boris.poehland.business/next-js-api-routes-how-to-read-files-from-directory-compatible-with-vercel-5fb5837694b9'}/>

      <main className={styles.main}>
        <h1>Images read from API route: </h1>
          {!data && "Loading..."}
          {data && data.map(imgPath => <img src={imgPath} alt=""/>)}
      </main>
    </div>
  )
}

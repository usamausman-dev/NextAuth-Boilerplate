import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>
              {session ? (<span style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}> Welcome <span>&nbsp; -&gt;</span>  <img src={session.user.image} alt="profile-pic" style={{ width: '3.5em', margin: '0 20px' }} /> {session.user.name}</span>) : (<>Welcome <span>-&gt; USER &nbsp;</span></>)}
            </code>
          </p>
          <div>{session ? (<button style={{ padding: '5px 20px' }} onClick={() => signOut()}>Sign out</button>) : (<button style={{ padding: '5px 20px' }} onClick={() => signIn()}>Sign in</button>)}</div>
        </div>

        <div className={styles.center}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

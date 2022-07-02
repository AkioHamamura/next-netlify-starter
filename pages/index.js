import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import SideHeader from '@components/SideHeader'
import { Fragment } from 'react'
import picTest from '@images/pic-test.jpg'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">Get started by editing my bfig32<code>pages/index.js</code></p>
        <Link href="/about"><a>About</a></Link>
        <SideHeader title="Side Header" />
        <Image src={picTest} alt="TheStormThatIsApproaching"/>
      </main>
    </div>


  )
}

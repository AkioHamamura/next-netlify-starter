import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import SideHeader from '@components/SideHeader'
import { Fragment } from 'react'
import Image from 'next/image'

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
        <Image src="./public/images/Sofie-Chair-White-Iso-copy.png" layout="responsive" alt="TheStormThatIsApproaching"/>
      </main>
    </div>


  )
}

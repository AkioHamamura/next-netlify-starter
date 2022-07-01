import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing my bfig32<code>pages/index.js</code>
        </p>
        //create a link to the about page
        <h1><link href="/about" rel="next" /></h1>
    

      </main>
    </div>
  )
}

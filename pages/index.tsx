import Head from 'next/head'
import Hero from '../components/Hero'
import Gamemodes from '../components/Gamemodes'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vortan MC</title>
        <meta name="description" content="Vortan MC - Competitive BedWars and Lifesteal SMP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/server-icon.png" />
      </Head>

      <main className="bg-[#0d0d0d] text-white">
        <Hero />
        <Gamemodes />
        <Connect />
        <Footer />
      </main>
    </>
  )
}

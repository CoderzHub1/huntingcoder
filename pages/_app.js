import Navbar from './Components/Navbar'
import '../styles/GlobalStyle.css'
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    
    <>
      <Head>
        
      </Head>
      <NextNProgress/>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
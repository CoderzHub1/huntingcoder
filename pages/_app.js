import Navbar from './Components/Navbar'
import '../styles/GlobalStyle.css'
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    
    <>
      <NextNProgress color='red' height={2}/>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
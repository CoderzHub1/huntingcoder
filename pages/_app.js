import Navbar from './Components/Navbar'
import '../styles/GlobalStyle.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {7
  return (
    
    <>
      <NextNProgress/>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
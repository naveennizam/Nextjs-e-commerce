import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

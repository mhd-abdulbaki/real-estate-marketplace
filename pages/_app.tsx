import '@/styles/globals.css'
import type { AppProps } from 'next/app'


import { store } from '../app'
import { Provider } from 'react-redux'

import Navbar from "../components/navbar/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    
    </Provider>
  )
}

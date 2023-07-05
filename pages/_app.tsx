import type { AppProps } from 'next/app'
import '../styles/globals.css'

import "moment/locale/mn";
import "gestalt/dist/gestalt.css";
import moment from "moment";

moment.locale("mn");

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
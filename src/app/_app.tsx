import { Inter, Lato } from 'next/font/google'
import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  )
}

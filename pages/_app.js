import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
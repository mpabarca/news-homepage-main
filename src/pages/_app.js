import '@/styles/index.scss'
import DesktopNavbar from '../components/desktopNavbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DesktopNavbar />
      <Component {...pageProps} />
    </>
  )
}

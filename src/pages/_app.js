import '@/styles/index.scss'
import DesktopNavbar from '../components/molecules/desktopNavbar';
import MobileNavbar from '../components/molecules/mobileNavbar';


export default function App({ Component, pageProps }) {
  return (
    <>
      <MobileNavbar />
      <Component {...pageProps} />
    </>
  )
}

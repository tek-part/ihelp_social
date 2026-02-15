import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { CookieBanner } from '@/components/organisms/CookieBanner'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { heroCtaLinks } from '@/config/constants'

export const MainLayout = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen text-body">
      <Navbar overlay={isHome} />
      <main className={isHome ? 'text-body' : 'pt-24 text-body'}>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <a
        href={heroCtaLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:border-[#25D366] hover:shadow-xl"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  )
}

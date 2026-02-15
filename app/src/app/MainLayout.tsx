import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { CookieBanner } from '@/components/organisms/CookieBanner'

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
    </div>
  )
}

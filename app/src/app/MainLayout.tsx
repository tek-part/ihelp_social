import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { CookieBanner } from '@/components/organisms/CookieBanner'

export const MainLayout = () => (
  <div className="min-h-screen text-body">
    <Navbar />
    <main className="pt-24 text-body">
      <Outlet />
    </main>
    <Footer />
    <CookieBanner />
  </div>
)

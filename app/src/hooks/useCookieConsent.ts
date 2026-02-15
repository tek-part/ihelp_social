import { useEffect, useState } from 'react'
import { deleteCookie, getCookie, setCookie } from '@/utils/cookies'

type ConsentStatus = 'accepted' | 'rejected' | null
const COOKIE_KEY = 'ihelp_cookie_consent'

export const useCookieConsent = () => {
  const [status, setStatus] = useState<ConsentStatus>(null)

  useEffect(() => {
    const value = getCookie(COOKIE_KEY)
    if (value === 'accepted' || value === 'rejected') {
      setStatus(value)
    }
  }, [])

  const accept = () => {
    setCookie(COOKIE_KEY, 'accepted', 180)
    setStatus('accepted')
  }

  const reject = () => {
    setCookie(COOKIE_KEY, 'rejected', 180)
    deleteCookie('analytics_opt_in') // clear any existing analytics flag
    setStatus('rejected')
  }

  return { status, accept, reject }
}

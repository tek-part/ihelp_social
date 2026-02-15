import { useCookieConsent } from '@/hooks/useCookieConsent'
import { t } from '@/utils/i18n'
import { useLocale } from '@/context/LocaleContext'
import { Button } from '../atoms/Button'

export const CookieBanner = () => {
  const { status, accept, reject } = useCookieConsent()
  const { locale } = useLocale()

  if (status) return null

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 max-w-3xl rounded-xl border border-border bg-surface shadow-card md:left-1/2 md:-translate-x-1/2">
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">{t(locale, 'cookie_message')}</p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="primary" onClick={accept}>
            {t(locale, 'accept')}
          </Button>
          <Button size="sm" variant="outline" onClick={reject}>
            {t(locale, 'reject')}
          </Button>
        </div>
      </div>
    </div>
  )
}

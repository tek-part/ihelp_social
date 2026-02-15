/**
 * Frontend-only token storage strategy:
 * - Keep an in-memory copy to avoid unnecessary exposure.
 * - Allow optional persistence in localStorage for long sessions (explicit opt-in).
 * - Provide a single API surface to rotate/clear tokens.
 */
const STORAGE_KEY = 'ihelp_token'
let inMemoryToken: string | null = null

const readPersisted = () => {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(STORAGE_KEY)
}

export const tokenService = {
  setToken(token: string, persist = false) {
    inMemoryToken = token
    if (persist && typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, token)
    }
  },
  getToken(): string | null {
    if (inMemoryToken) return inMemoryToken
    inMemoryToken = readPersisted()
    return inMemoryToken
  },
  clearToken() {
    inMemoryToken = null
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY)
    }
  },
}

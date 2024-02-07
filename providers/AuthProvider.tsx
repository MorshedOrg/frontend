'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'

interface AuthContextValues {
  phone: string
  otpSession: string
  accessToken: string
  refreshToken: string
  setPhone: Dispatch<SetStateAction<string>>
  setOtpSession: Dispatch<SetStateAction<string>>
  setAccessToken: Dispatch<SetStateAction<string>>
  setRefreshToken: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<AuthContextValues | undefined>(undefined)

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext was used outside of its Provider')
  }

  return context
}

type AuthProviderProps = {
  children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [phone, setPhone] = useState('')
  const [otpSession, setOtpSession] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  const values = useMemo(
    () => ({
      phone,
      setPhone,
      otpSession,
      accessToken,
      refreshToken,
      setOtpSession,
      setAccessToken,
      setRefreshToken,
    }),
    [accessToken, otpSession, phone, refreshToken]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

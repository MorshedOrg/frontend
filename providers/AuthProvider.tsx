'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react'

interface AuthContextValues {
  phone?: string
  setPhone?: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<AuthContextValues>({})

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

  const values = useMemo(
    () => ({
      phone,
      setPhone,
    }),
    [phone, setPhone]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

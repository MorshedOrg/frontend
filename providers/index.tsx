import type { ReactNode } from 'react'
import AuthProvider from './AuthProvider'
import ReactQueryProvider from './ReactQueryProvider'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  )
}

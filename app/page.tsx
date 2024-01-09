'use client'

import styles from './page.module.css'
import Onboarding from './onboarding/page'
import { useRouter } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/react'

function Home() {
  const router = useRouter()

  const redirectToSignUpPage = () => {
    localStorage.setItem('from', 'onboarding')
    router.replace('/auth/signup')
  }

  return (
    <NextUIProvider>
      <main className={styles.main}>
        <Onboarding onFinish={redirectToSignUpPage} />
      </main>
    </NextUIProvider>
  )
}

export default Home

'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import Onboarding from './components/Onboarding'
import { NextUIProvider } from '@nextui-org/react'
import MentorsList from './components/MentorsList'
import { IS_FIRST_RUN } from '@/configs/environment'

function Home() {
  const [showOnboardingSteps, setShowOnboardingSteps] = useState(false)

  useEffect(() => {
    if (IS_FIRST_RUN) {
      setShowOnboardingSteps(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const disableOnboardingSteps = () => {
    setShowOnboardingSteps(false)
    localStorage.setItem('isFirstRun', 'false')
    posthog.capture('onboarding', { done: true })

    console.log(
      'process.env.NEXT_PUBLIC_POSTHOG_KEY',
      process.env.NEXT_PUBLIC_POSTHOG_KEY
    )  
  }

  return (
    <NextUIProvider>
      <main>
        {showOnboardingSteps ? (
          <Onboarding onFinish={disableOnboardingSteps} />
        ) : (
          <>
            <div className={styles.container}>
              <p className={styles.title}>
                یک عنوان هیجان انگیز که
                <span className={styles['title--bold']}>
                  {' '}
                  اتفاقا طولانی{' '}
                </span>
                هم هست!
              </p>

              <span className={styles.subtitle}>
                یه متن زیر عنوان یکمی کم تر هیجان انگیز ولی به اندازه کافی کامل
                کننده
              </span>
            </div>

            <MentorsList
              title="منتورهای برتر"
              className={styles.mentors}
            />

            <MentorsList
              title="برنامه‌نویسی"
              className={styles.mentors}
            />

            <div className={styles.newMentor}>
              <h2 className={styles.newMentorTitle}>
                شما هم کسی رو می‌شناسید؟
              </h2>
              <span className={styles.newMentorDescription}>
                اگه حس می‌کنید جای کسی توی این لیست خالیه حتما ما رو در جریان
                بذارید
              </span>

              <Link href="#" className={styles.newMentorCta}>
                ارتباط با ما
              </Link>
            </div>
          </>
        )}
      </main>
    </NextUIProvider>
  )
}

export default Home

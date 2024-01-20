'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import Onboarding from './components/Onboarding'
import { NextUIProvider } from '@nextui-org/react'
import MentorsList from './components/MentorsList'
import { IS_FIRST_RUN } from '@/configs/environment'

import bestMentors from '@/mock/mentors/best_mentors.json'
import programmingMentors from '@/mock/mentors/best_mentors.json'


function Home() {
  const [showOnboardingSteps, setShowOnboardingSteps] = useState(false)

  useEffect(() => {
    if (IS_FIRST_RUN()) {
      setShowOnboardingSteps(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const disableOnboardingSteps = () => {
    setShowOnboardingSteps(false)
    localStorage.setItem('isFirstRun', 'false')
    posthog.capture('onboarding', { done: true })
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
                اگه دوست داری با کسی راجع‌بهش حرف بزنی الان وقتشه!
              </p>

              <span className={styles.subtitle}>
                اینجا کلی آدم خفن و با تجربه رو لیست کردیم که می‌تونن بهت کمک کنن
              </span>
            </div>

            <MentorsList title="منتورهای برتر" mentors={bestMentors} className={styles.mentors} />

            <MentorsList title="برنامه‌نویسی" mentors={programmingMentors} className={styles.mentors} />

            <div className={styles.newMentor}>
              <h2 className={styles.newMentorTitle}>
                شما هم کسی رو می‌شناسید؟
              </h2>
              <span className={styles.newMentorDescription}>
                اگه حس می‌کنید جای کسی توی این لیست خالیه حتما ما رو در جریان
                بذارید
              </span>

              <Link
                href="https://t.me/ysilavi"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.newMentorCta}
              >
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

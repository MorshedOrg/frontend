'use client'

import * as stylex from '@stylexjs/stylex'
import { useEffect, useState } from 'react'
import Onboarding from './components/Onboarding'
import { NextUIProvider } from '@nextui-org/react'
import MentorsList from './components/MentorsList'
import { IS_FIRST_RUN } from '@/configs/environment'
import { colors } from '../configs/theme/variables.stylex'
import Link from 'next/link'

const styles = stylex.create({
  container: {
    display: 'flex',
    padding: '8vw 4vw',
    alignItems: 'center',
    flexDirection: 'column',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.gray1,
  },

  title: {
    fontSize: 24,
    marginTop: 24,
    color: colors.black,
    // color: colors.gray,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  'title--bold': {
    // fontWeight: 'bold',
    color: colors.black,
  },

  subtitle: {
    marginTop: 16,
    color: colors.gray,
    textAlign: 'center',
  },

  mentors: {
    padding: '6vw 4vw',
  },

  newMentor: {
    display: 'flex',
    margin: '6vw 4vw',
    padding: '6vw 4vw',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#d4eaf750',
  },

  newMentorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  newMentorDescription: {
    marginTop: 8,
    textAlign: 'center',
    color: colors.gray,
  },

  newMentorCta: {
    fontSize: 14,
    marginTop: 32,
    borderRadius: 4,
    color: '#f5f5f5',
    padding: '10px 16px',
    backgroundColor: '#25b1bf',
  },
})

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
  }

  return (
    <NextUIProvider>
      <main>
        {showOnboardingSteps ? (
          <Onboarding onFinish={disableOnboardingSteps} />
        ) : (
          <>
            <div {...stylex.props(styles.container)}>
              <p {...stylex.props(styles.title)}>
                یک عنوان هیجان انگیز که
                <span {...stylex.props(styles['title--bold'])}>
                  {' '}
                  اتفاقا طولانی{' '}
                </span>
                هم هست!
              </p>

              <span {...stylex.props(styles.subtitle)}>
                یه متن زیر عنوان یکمی کم تر هیجان انگیز ولی به اندازه کافی کامل
                کننده
              </span>
            </div>

            <MentorsList
              title="منتورهای برتر"
              {...stylex.props(styles.mentors)}
            />

            <MentorsList
              title="برنامه‌نویسی"
              {...stylex.props(styles.mentors)}
            />

            <div {...stylex.props(styles.newMentor)}>
              <h2 {...stylex.props(styles.newMentorTitle)}>
                شما هم کسی رو می‌شناسید؟
              </h2>
              <span {...stylex.props(styles.newMentorDescription)}>
                اگه حس می‌کنید جای کسی توی این لیست خالیه حتما ما رو در جریان
                بذارید
              </span>

              <Link href="#" {...stylex.props(styles.newMentorCta)}>
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

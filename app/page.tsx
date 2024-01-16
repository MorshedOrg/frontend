'use client'

import { useEffect, useState } from 'react'
import Onboarding from './components/Onboarding'
import { NextUIProvider } from '@nextui-org/react'
import { IS_FIRST_RUN } from '@/configs/environment'
import MentorsList from './components/MentorsList/index'

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
        {showOnboardingSteps && (
          <Onboarding onFinish={disableOnboardingSteps} />
        )}

        <MentorsList />
      </main>
    </NextUIProvider>
  )
}

export default Home

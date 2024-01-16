import { useState } from 'react'
import Step01 from './steps/Step01'
import Step02 from './steps/Step02'
import Step03 from './steps/Step03'

type OnboardingProps = {
  onFinish: () => void
}

function Onboarding({ onFinish }: OnboardingProps) {
  const steps = [Step01, Step02, Step03]
  const [step, setStep] = useState(0)

  const CurrentStep = steps[step]

  const onStepChange = () => {
    const isDone = step === steps.length - 1
    isDone ? onFinish() : setStep((prevState) => prevState + 1)
  }

  return <CurrentStep onChange={onStepChange} />
}

export default Onboarding

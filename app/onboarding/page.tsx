import { useState } from 'react'
import Step01 from './components/Step01'
import Step02 from './components/Step02'
import Step03 from './components/Step03'

type Onboarding = {
  onFinish: () => void
}

function Onboarding({ onFinish }: Onboarding) {
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

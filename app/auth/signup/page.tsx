"use client"

import { useRouter } from 'next/navigation'
import { Input, Button } from '@nextui-org/react'

function SignUp() {
  const router = useRouter()

  const signUp = () => {
    router.push('/auth/verify')
  }

  return (
    <div>
      <div className="bg-teal-400 h-[60vh]"></div>

      <div className="py-12 px-8">
        <Input type="number" label="شماره همراه" dir="ltr" />

        <Button
          color="primary"
          size="lg"
          fullWidth
          className="mt-3"
          onClick={signUp}
        >
          ثبت‌نام / ورود
        </Button>
      </div>
    </div>
  )
}

export default SignUp

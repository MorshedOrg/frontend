"use client"

import { useRouter } from 'next/navigation'
import { Input, Button } from '@nextui-org/react'

function SignIn() {
  const router = useRouter()

  const signIn = () => {
    router.push('/account/me')
  }

  return (
    <div>
      <div className="bg-teal-400 h-[60vh]"></div>

      <div className="py-12 px-8">
        <Input type="number" label="شماره همراه" value="09000000000" dir="ltr" disabled />
        <Input type="password" label="رمز عبور" dir="ltr" className='mt-2' />

        <Button
          color="primary"
          size="lg"
          fullWidth
          className="mt-3"
          onClick={signIn}
        >
          ورود
        </Button>
      </div>
    </div>
  )
}

export default SignIn

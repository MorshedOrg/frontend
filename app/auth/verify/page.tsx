"use client"

import { Input, Button } from '@nextui-org/react'

function Verify() {
  const verify = () => {}

  return (
    <div>
      <div className="bg-orange-500 h-[60vh]"></div>

      <div className="py-12 px-8">
        <Input type="number" label="کد تایید" maxLength={4} dir="ltr" />

        <Button
          color="primary"
          size="lg"
          fullWidth
          className="mt-3"
          onClick={verify}
        >
          بررسی کد
        </Button>
      </div>
    </div>
  )
}

export default Verify

'use client'

import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

function Profile() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  return (
    <div className="py-8 px-4">
      <label className="flex justify-center">
        <img
          src="https://picsum.photos/128/128"
          alt=""
          className="rounded-full"
        />

        <input type="file" className="hidden" />
      </label>

      <h1 className="text-center font-bold text-xl mt-6 overflow-hidden">
        ‌{fname} {lname}
      </h1>

      <div className='flex flex-col h-[64vh]'>
        <div className="flex mt-8">
          <Input label="نام" onChange={(e) => setFname(e.target.value)} />

          <Input
            label="نام خانوادگی"
            className="mr-2"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <Input label="رمز عبور" className="mt-4" />
        <Input label="تکرار رمز عبور" className="mt-4" />

        <Button color="primary" size="lg" fullWidth className="mt-auto">
          ثبت
        </Button>
      </div>
    </div>
  )
}

export default Profile

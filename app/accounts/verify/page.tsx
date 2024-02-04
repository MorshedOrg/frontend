'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthContext } from '@/providers/AuthProvider'

type Inputs = {
  code: string
}

export default function VerifyPage() {
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const router = useRouter()
  const { phone } = useAuthContext()
  const [timer, setTimer] = useState(3)

  const onFormSubmit: SubmitHandler<Inputs> = (data) => {
    clearErrors()
  }

  const editPhoneNumber = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    router.replace('/accounts/register')
  }

  const retry = () => {}

  useEffect(() => {
    const timerTimeout = setTimeout(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0))
    }, 1000)

    return () => clearTimeout(timerTimeout)
  }, [timer])

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col h-[100vh] p-6"
    >
      <h1 className="font-bold text-2xl mt-8">تایید حساب</h1>
      <span className="mt-2 text-gray-600">
        کد تایید رو به شماره «{phone}» فرستادیم. شماره اشتباهه؟{' '}
        <a
          href="/accounts/register"
          className="text-primary"
          onClick={editPhoneNumber}
        >
          ویرایش
        </a>
      </span>

      <label className="form-control w-full max-w-xs mt-12">
        <div className="label">
          <span className="label-text">کد تایید</span>
        </div>

        <input
          dir="ltr"
          type="number"
          placeholder="1234"
          {...register('code', {
            required: 'این مورد الزامیست',
            pattern: {
              value: new RegExp('^\\d{4}$'),
              message: 'کد تایید وارد شده اشتباه است',
            },
          })}
          className={clsx('input input-bordered ltr w-full max-w-xs', {
            'input-error': errors.code,
          })}
        />

        <div className="label">
          {errors.code?.message && (
            <span className="label-text-alt text-red-500">
              {errors.code?.message}
            </span>
          )}
        </div>
      </label>

      <button className="btn btn-primary mt-auto">بررسی کد تایید</button>

      <button
        type="button"
        disabled={timer > 0}
        className="btn btn-ghost mt-2"
        onClick={retry}
      >
        ارسال مجدد {timer > 0 ? `(${timer})` : null}
      </button>
    </form>
  )
}

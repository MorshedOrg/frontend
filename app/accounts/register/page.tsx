'use client'

import clsx from 'clsx'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useSendOtp } from '../services/mutations'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthContext } from '@/providers/AuthProvider'

type Inputs = {
  phone: string
}

export default function RegisterPage() {
  const router = useRouter()
  const { phone, setPhone, setOtpSession } = useAuthContext()
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: useMemo(() => ({ phone }), [phone]) })

  const sendOtpMutation = useSendOtp()

  const onFormSubmit: SubmitHandler<Inputs> = async (data) => {
    clearErrors()

    sendOtpMutation.mutate(
      { phone: data.phone },
      {
        onSuccess: (result) => {
          setPhone?.(data.phone)
          setOtpSession?.(result.otpSession)

          router.push('/accounts/verify')
        },
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col h-screen p-6"
    >
      <h1 className="font-bold text-2xl mt-8">ثبت نام</h1>
      <span className="mt-2 text-gray-600">
        لطفا شماره همراه خود را وارد کنید
      </span>

      <label className="form-control w-full max-w-xs mt-12">
        <div className="label">
          <span className="label-text">شماره همراه</span>
        </div>

        <input
          dir="ltr"
          type="number"
          placeholder="09"
          {...register('phone', {
            required: 'این مورد الزامیست',
            pattern: {
              value: new RegExp('^(\\+98|0)?9\\d{9}$'),
              message: 'شماره همراه وارد شده اشتباه است',
            },
          })}
          className={clsx('input input-bordered ltr w-full max-w-xs', {
            'input-error': errors.phone,
          })}
        />

        <div className="label">
          {errors.phone?.message && (
            <span className="label-text-alt text-red-500">
              {errors.phone?.message}
            </span>
          )}
        </div>
      </label>

      <button type="submit" className="btn btn-primary mt-auto">
        ارسال کد تایید
      </button>
    </form>
  )
}

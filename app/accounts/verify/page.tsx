'use client'

import { useAuthProvider } from '@/providers/AuthProvider'
import clsx from 'clsx'
import { useForm, SubmitHandler } from 'react-hook-form'

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
  const { phone } = useAuthProvider()

  const onFormSubmit: SubmitHandler<Inputs> = (data) => {
    clearErrors()
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col h-[100vh] p-6"
    >
      <h1 className="font-bold text-2xl mt-8">کد تایید</h1>
      <span className="mt-2 text-gray-600">
        کد تایید رو به شماره «{phone}» ارسال کردیم.{' '}
        <button className="btn btn-link">ویرایش شماره همراه</button>
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
      <button className="btn btn-ghost mt-2">ارسال مجدد</button>
    </form>
  )
}

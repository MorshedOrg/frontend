'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useLogin } from '../services/mutations'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthContext } from '@/providers/AuthProvider'
import Link from 'next/link'

type Inputs = {
  phone: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const { setAccessToken, setRefreshToken } = useAuthContext()
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const loginMutation = useLogin()

  const onFormSubmit: SubmitHandler<Inputs> = (data) => {
    clearErrors()

    loginMutation.mutate(
      { phone: data.phone, password: data.password },
      {
        onSuccess: (result) => {
          setAccessToken(result.accessToken)
          setRefreshToken(result.refreshToken)

          router.push('/')
        },
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col h-screen p-6"
    >
      <h1 className="font-bold text-2xl mt-8">ورود</h1>
      <span className="mt-2 text-gray-600">
        برای ورود می‌تونی از شماره همراه و رمز عبوری که قبلا باهاشون ثبت نام
        کردی استفاده کنی
      </span>

      <div className="mt-12">
        <label className="form-control w-full max-w-xs">
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

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">رمز عبور</span>
          </div>

          <input
            type="password"
            placeholder=""
            {...register('password', { required: 'این مورد الزامیست' })}
            className={clsx('input input-bordered ltr w-full max-w-xs', {
              'input-error': errors.password,
            })}
          />

          <div className="label">
            {errors.password?.message && (
              <span className="label-text-alt text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>
        </label>
      </div>

      <button type="submit" className="btn btn-primary mt-auto">
        ورود
      </button>

      <Link href="/accounts/register" className="btn btn-ghost mt-2">
        ثبت نام
      </Link>
    </form>
  )
}

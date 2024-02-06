'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthContext } from '@/providers/AuthProvider'

type Inputs = {
  firstName: string
  lastName: string
  password: string
  passwordConfirm: string
  username: string
}

export default function RegisterPage() {
  const router = useRouter()
  const { phone, setPhone } = useAuthContext()
  const {
    watch,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onFormSubmit: SubmitHandler<Inputs> = (data) => {
    clearErrors()
    setPhone?.('09212190039')
    router.push('/accounts/verify')
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col p-6"
    >
      <h1 className="font-bold text-2xl mt-8">تکمیل حساب کاربری</h1>
      <span className="mt-2 text-gray-600">
        فقط یه قدم دیگه مونده! یکمی از خودت برامون بگو
      </span>

    <div className='mt-12'>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">نام</span>
        </div>

        <input
          type="text"
          placeholder="مهدی"
          {...register('firstName', { required: 'این مورد الزامیست' })}
          className={clsx('input input-bordered ltr w-full max-w-xs', {
            'input-error': errors.firstName,
          })}
        />

        <div className="label">
          {errors.firstName?.message && (
            <span className="label-text-alt text-red-500">
              {errors.firstName?.message}
            </span>
          )}
        </div>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">نام خانوادگی</span>
        </div>

        <input
          type="text"
          placeholder="مهدوی"
          {...register('lastName', { required: 'این مورد الزامیست' })}
          className={clsx('input input-bordered ltr w-full max-w-xs', {
            'input-error': errors.lastName,
          })}
        />

        <div className="label">
          {errors.lastName?.message && (
            <span className="label-text-alt text-red-500">
              {errors.lastName?.message}
            </span>
          )}
        </div>
      </label>

      <label className="form-control w-full max-w-xs mt-1">
        <div className="label">
          <span className="label-text">نام کاربری</span>
        </div>

        <input
          dir="ltr"
          type="text"
          placeholder=""
          {...register('username', {
            required: 'این مورد الزامیست',
            minLength: {
              value: 5,
              message: 'نام کاربری باید حداقل ۵ کاراکتر باشه',
            },
            maxLength: {
              value: 50,
              message: 'نام کاربری باید حداکثر ۵۰ کاراکتر باشه',
            },
          })}
          className={clsx('input input-bordered ltr w-full max-w-xs', {
            'input-error': errors.username,
          })}
        />

        <div className="label">
          {errors.username?.message && (
            <span className="label-text-alt text-red-500">
              {errors.username?.message}
            </span>
          )}
        </div>
      </label>

      <label className="form-control w-full max-w-xs mt-1">
        <div className="label">
          <span className="label-text">رمز عبور</span>
        </div>

        <input
          dir="ltr"
          type="password"
          placeholder=""
          {...register('password', {
            required: 'این مورد الزامیست',
            minLength: {
              value: 8,
              message: 'رمزعبور باید حداقل ۸ کاراکتر باشه',
            },
            maxLength: {
              value: 128,
              message: 'رمزعبور باید حداکثر ۱۲۸ کاراکتر باشه',
            },
          })}
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

      <label className="form-control w-full max-w-xs mt-1">
        <div className="label">
          <span className="label-text">تکرار رمز عبور</span>
        </div>

        <input
          dir="ltr"
          type="password"
          placeholder=""
          {...register('passwordConfirm', {
            required: 'این مورد الزامیست',
            minLength: {
              value: 8,
              message: 'رمزعبور باید حداقل ۸ کاراکتر باشه',
            },
            maxLength: {
              value: 128,
              message: 'رمزعبور باید حداکثر ۱۲۸ کاراکتر باشه',
            },
            validate(value: string) {
              if (watch('password') != value) {
                return 'رمز عبور و تکرارش باهم برابر نیستن'
              }
            },
          })}
          className={clsx('input input-bordered ltr w-full max-w-xs', {
            'input-error': errors.passwordConfirm,
          })}
        />

        <div className="label">
          {errors.passwordConfirm?.message && (
            <span className="label-text-alt text-red-500">
              {errors.passwordConfirm?.message}
            </span>
          )}
        </div>
      </label>

    </div>


      <button type="submit" className="btn btn-primary mt-12">
        ایجاد حساب
      </button>
    </form>
  )
}

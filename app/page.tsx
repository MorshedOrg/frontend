'use client'

import clsx from 'clsx'
import Link from 'next/link'
import styles from './page.module.css'
import Onboarding from './onboarding/page'
import { useRouter } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/react'

function Home() {
  const router = useRouter()

  const redirectToSignUpPage = () => {
    localStorage.setItem('from', 'onboarding')
    router.replace('/auth/signup')
  }

  return (
    <NextUIProvider>
      <main className={clsx(styles.main, 'py-8 px-4')}>
        <div className={styles.mentors}>
          <div className={styles.mentor}>
            <div className={styles['mentor__banner-box']}>
              <img
                src="https://picsum.photos/425/100"
                alt=""
                className={styles.mentor__banner}
              />
            </div>

            <div className={styles.mentor__content}>
              <div className={styles['mentor__avatar-box']}>
                <img
                  src="https://picsum.photos/128/128"
                  alt=""
                  className={styles.mentor__avatar}
                />
              </div>

              <Link href="/mentors/1" className={styles.mentor__name}>
                یاسین سیلاوی
              </Link>
              <span className={styles.mentor__bio}>
                یه برنامه‌نویس خیلی معمولی ...
              </span>
              <div className={styles.mentor__categories}>
                <a href="#" className={styles.mentor__category}>
                  برنامه‌نویسی
                </a>
                <a href="#" className={styles.mentor__category}>
                  نویسندگی
                </a>
                <a href="#" className={styles.mentor__category}>
                  خوانندگی
                </a>
                <a href="#" className={styles.mentor__category}>
                  نقاشی
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mentor}>
            <div className={styles['mentor__banner-box']}>
              <img
                src="https://picsum.photos/425/100"
                alt=""
                className={styles.mentor__banner}
              />
            </div>

            <div className={styles.mentor__content}>
              <div className={styles['mentor__avatar-box']}>
                <img
                  src="https://picsum.photos/128/128"
                  alt=""
                  className={styles.mentor__avatar}
                />
              </div>

              <a href="" className={styles.mentor__name}>
                یاسین سیلاوی
              </a>
              <span className={styles.mentor__bio}>
                یه برنامه‌نویس خیلی معمولی ...
              </span>
              <div className={styles.mentor__categories}>
                <a href="#" className={styles.mentor__category}>
                  برنامه‌نویسی
                </a>
                <a href="#" className={styles.mentor__category}>
                  نویسندگی
                </a>
                <a href="#" className={styles.mentor__category}>
                  خوانندگی
                </a>
                <a href="#" className={styles.mentor__category}>
                  نقاشی
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mentor}>
            <div className={styles['mentor__banner-box']}>
              <img
                src="https://picsum.photos/425/100"
                alt=""
                className={styles.mentor__banner}
              />
            </div>

            <div className={styles.mentor__content}>
              <div className={styles['mentor__avatar-box']}>
                <img
                  src="https://picsum.photos/128/128"
                  alt=""
                  className={styles.mentor__avatar}
                />
              </div>

              <a href="" className={styles.mentor__name}>
                یاسین سیلاوی
              </a>
              <span className={styles.mentor__bio}>
                یه برنامه‌نویس خیلی معمولی ...
              </span>
              <div className={styles.mentor__categories}>
                <a href="#" className={styles.mentor__category}>
                  برنامه‌نویسی
                </a>
                <a href="#" className={styles.mentor__category}>
                  نویسندگی
                </a>
                <a href="#" className={styles.mentor__category}>
                  خوانندگی
                </a>
                <a href="#" className={styles.mentor__category}>
                  نقاشی
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <Onboarding onFinish={redirectToSignUpPage} /> */}
      </main>
    </NextUIProvider>
  )
}

export default Home

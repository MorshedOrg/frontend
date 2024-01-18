'use client'

import clsx from 'clsx'
import styles from './ExpertiseSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

type ExpertiseSlider = {
  className?: string
}

export default function ExpertiseSlider({ className }: ExpertiseSlider) {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={1.1}
      className={clsx(styles['expertise-slider'], className)}
    >
      <SwiperSlide className={styles.expertise}>
        <h3 className={styles.expertise__title}>برنامه نویسی</h3>

        <p className={styles.expertise__description}>
          اگه میخوای برنامه نویسی رو شروع کنی، میخوای خودت رو به عنوان یه برنامه
          نویس ارتقا بدی یا حتی اگه دوست داری با یه برنامه نویس دیگه گپ بزنی و
          اخلاق کاریش رو بپرسی میتونی با <span>یاسین سیلاوی</span> صحبت کنی
        </p>
      </SwiperSlide>

      <SwiperSlide className={styles.expertise}>
        <h3 className={styles.expertise__title}>نویسندگی</h3>

        <p className={styles.expertise__description}>
          اگه میخوای برنامه نویسی رو شروع کنی، میخوای خودت رو به عنوان یه برنامه
          نویس ارتقا بدی یا حتی اگه دوست داری با یه برنامه نویس دیگه گپ بزنی و
          اخلاق کاریش رو بپرسی میتونی با <span>یاسین سیلاوی</span> صحبت کنی
        </p>
      </SwiperSlide>

      <SwiperSlide className={styles.expertise}>
        <h3 className={styles.expertise__title}>برنامه نویسی</h3>

        <p className={styles.expertise__description}>
          اگه میخوای برنامه نویسی رو شروع کنی، میخوای خودت رو به عنوان یه برنامه
          نویس ارتقا بدی یا حتی اگه دوست داری با یه برنامه نویس دیگه گپ بزنی و
          اخلاق کاریش رو بپرسی میتونی با <span>یاسین سیلاوی</span> صحبت کنی
        </p>
      </SwiperSlide>
    </Swiper>
  )
}

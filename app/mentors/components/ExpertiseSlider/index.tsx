'use client'

import clsx from 'clsx'
import styles from './ExpertiseSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

type ExpertiseSlider = {
  expertise: string[]
  className?: string
}

// prettier-ignore
const expertiseText: Record<string, string> = {
  'برنامه‌نویسی':
    'میخوای برنامه‌نویسی رو شروع کنی؟ دوست داری خودت رو به عنوان یه برنامه‌نویس ارتقا بدی؟ یا شایدم فقط میخوای بدونی بازار کار برنامه‌نویس‌ها چطوریه؟ اگه دوست داری جواب این سوالا رو بگیری وقتشه با یه برنامه‌نویس مشورت کنی!',
  
}

export default function ExpertiseSlider({
  expertise,
  className,
}: ExpertiseSlider) {
  console.log(expertise)

  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={1.1}
      className={clsx(styles['expertise-slider'], className)}
    >
      {expertise.map((e, idx) => (
        <SwiperSlide key={idx} className={styles.expertise}>
          <h3 className={styles.expertise__title}>{e}</h3>

          {!!expertiseText[e] && (
            <p className={styles.expertise__description}>{expertiseText[e]}</p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

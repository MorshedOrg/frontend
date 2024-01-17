'use client'

import clsx from 'clsx'
import styles from './page.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

type Todo = {
  id: number
}

export const generateStaticParams = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await data.json()

  return todos.map((todo) => ({ id: String(todo.id) }))
}

export default function Mentor({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <section className={styles.mentor}>
      <div className={styles['mentor__image-box']}>
        <img
          src="https://fastly.picsum.photos/id/695/120/120.jpg?hmac=hRsLFDxtQHFaEhk5FPLxGwUq4j7IJSP3UddrTn2pU30"
          alt=""
          className={styles.mentor__image}
        />
      </div>

      <h1 className={styles.mentor__name}>یاسین سیلاوی</h1>

      <Swiper
        spaceBetween={8}
        slidesPerView={1.1}
        className={clsx(styles.expertise, styles.mentor__expertise)}
      >
        <SwiperSlide className={styles.expertise__box}>
          <h3 className={styles.expertise__title}>برنامه نویسی</h3>

          <p className={styles.expertise__description}>
            اگه میخوای برنامه نویسی رو شروع کنی، میخوای خودت رو به عنوان یه
            برنامه نویس ارتقا بدی یا حتی اگه دوست داری با یه برنامه نویس دیگه گپ
            بزنی و اخلاق کاریش رو بپرسی میتونی با <span>یاسین سیلاوی</span> صحبت
            کنی
          </p>
        </SwiperSlide>

        <SwiperSlide className={styles.expertise__box}>
          <h3 className={styles.expertise__title}>نویسندگی</h3>

          <p className={styles.expertise__description}>
            اگه میخوای برنامه نویسی رو شروع کنی، میخوای خودت رو به عنوان یه
            برنامه نویس ارتقا بدی یا حتی اگه دوست داری با یه برنامه نویس دیگه گپ
            بزنی و اخلاق کاریش رو بپرسی میتونی با <span>یاسین سیلاوی</span> صحبت
            کنی
          </p>
        </SwiperSlide>

        <SwiperSlide className={styles.expertise__box}>
          <h3 className={styles.expertise__title}>برنامه نویسی</h3>

          <p className={styles.expertise__description}>
            اگه میخوای برنامه نویسی رو شروع کنی، میخوای خودت رو به عنوان یه
            برنامه نویس ارتقا بدی یا حتی اگه دوست داری با یه برنامه نویس دیگه گپ
            بزنی و اخلاق کاریش رو بپرسی میتونی با <span>یاسین سیلاوی</span> صحبت
            کنی
          </p>
        </SwiperSlide>
      </Swiper>

      <div className={styles.actions}>
        <a
          href={`https://telegram.me/share/url?url=https://morshedorg.github.io/frontend/mentors/${id}&text=اگه علاقه داری راجع‌به برنامه‌نویسی، نویسندگی یا روانشناسی گپ بزنی حتما یه سری به «یاسین سیلاوی» بزن`}
          rel="noopener noreferrer"
          target="_blank"
          className={clsx(
            styles['actions__action'],
            styles['actions__action--secondary']
          )}
        >
          معرفی به بقیه
        </a>

        <a
          href="https://t.me/ysilavi"
          rel="noopener noreferrer"
          target="_blank"
          className={clsx(
            styles['actions__action'],
            styles['actions__action--primary']
          )}
        >
          گپ بزنیم
        </a>
      </div>
    </section>
  )
}

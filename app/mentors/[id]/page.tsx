import Link from 'next/link'
import styles from './page.module.css'

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
    <section className={styles['mentor-single']}>
      <div className={styles.mentor}>
        <div className={styles['mentor__banner-box']}>
          {/* <img src="" alt="" className={styles.mentor__banner} /> */}
        </div>

        <div className={styles.mentor__content}>
          <div className={styles['mentor__avatar-box']}>
            {/* <img src="" alt="" className={styles.mentor__avatar} /> */}
          </div>

          <Link href={`/mentors/${id}`} className={styles.mentor__name}>
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

      <a
        href="https://t.me/ysilavi"
        rel="noopener noreferrer"
        target="_blank"
        className={styles['mentor-single__cta']}
      >
        صحبت کنیم
      </a>
    </section>
  )
}
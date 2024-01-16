import Link from 'next/link'
import styles from './MentorsList.module.css'

export default function MentorsList() {
  return (
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
  )
}

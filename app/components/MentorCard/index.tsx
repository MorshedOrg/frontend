import clsx from 'clsx'
import Link from 'next/link'
import styles from './MentorCard.module.scss'

type MentorsCardProps = {
  id: number
  className?: string
}

export default function MentorCard({ id, className }: MentorsCardProps) {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.imageBox}>
        <img
          src="https://fastly.picsum.photos/id/1075/80/80.jpg?hmac=FpaK_MbL94lQkHE38K3bV0IdESHRuh5yQAJqTf1sdz8"
          alt=""
          className={styles.image}
        />
      </div>

      <Link href={`/mentors/${id}`} className={styles.name}>
        یاسین سیلاوی
      </Link>

      <span className={styles.jobTitle}>مشاور</span>

      <Link href={`/mentors/${id}`} className={styles.cta}>مشاهده پروفایل</Link>
    </div>
  )
}

import clsx from 'clsx'
import Link from 'next/link'
import { type Mentor } from '@/types/mentor'
import styles from './MentorCard.module.scss'

type MentorsCardProps = {
  className?: string
}

export default function MentorCard({
  id,
  name,
  role,
  photo,
  className,
}: Mentor & MentorsCardProps) {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.imageBox}>
        <img src={photo} alt={name} className={styles.image} />
      </div>

      <Link href={`/mentors/${id}`} className={styles.name}>
        {name}
      </Link>

      <span className={styles.jobTitle}>{role}</span>

      <Link href={`/mentors/${id}`} className={styles.cta}>
        مشاهده پروفایل
      </Link>
    </div>
  )
}

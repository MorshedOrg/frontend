import MentorCard from '../MentorCard'
import { type Mentor } from '@/types/mentor'
import styles from './MentorsList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

type MentorsListProps = {
  title: string
  mentors: Mentor[]
  className?: string
}

export default function MentorsList({ title, mentors, className }: MentorsListProps) {
  return (
    <section className={className}>
      <h2 className={styles.title}>{title}</h2>

      <Swiper spaceBetween={16} slidesPerView={1.5} className={styles.list}>
        {mentors.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <MentorCard {...mentor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

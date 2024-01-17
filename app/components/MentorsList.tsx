import MentorCard from './MentorCard'
import * as stylex from '@stylexjs/stylex'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { StyleXStyles } from '@stylexjs/stylex'
import { colors } from '../../configs/theme/variables.stylex'

type MentorsListProps = {
  title: string
  className?: string
  style?: StyleXStyles
}

const styles = stylex.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },

  mentors: {
    marginTop: 16,
  },
})

export default function MentorsList({
  title,
  className,
  style,
}: MentorsListProps) {
  const mentors = [{ id: 1 }, { id: 2 }, { id: 3 }]

  return (
    <section className={className} {...stylex.props(style)}>
      <h2 {...stylex.props(styles.title)}>{title}</h2>

      <Swiper spaceBetween={16} slidesPerView={1.5} {...stylex.props(styles.mentors)}>
        {mentors.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <MentorCard {...mentor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

import styles from './page.module.scss'
import { notFound } from 'next/navigation'
import allMentors from '@/mock/mentors/all_mentors.json'
import ExpertiseSlider from '../components/ExpertiseSlider'
import { MentorsPageActions } from './components/MentorPageActions'

export const generateStaticParams = () => {
  return allMentors.map((mentor) => ({ id: String(mentor.id) }))
}

export default function Mentor({ params }: { params: { id: string } }) {
  const { id } = params
  const mentor = allMentors.find((mentor) => mentor.id === +id)

  if (!mentor) {
    return notFound()
  }

  return (
    <section className={styles.mentor}>
      <div className={styles['mentor__image-box']}>
        <img
          src={mentor.photo}
          alt={mentor.name}
          className={styles.mentor__image}
        />
      </div>

      <h1 className={styles.mentor__name}>{mentor.name}</h1>

      <ExpertiseSlider
        expertise={mentor.expertise}
        className={styles.mentor__expertise}
      />

      <MentorsPageActions
        id={id}
        name={mentor.name}
        expertise={mentor.expertise}
        contacts={mentor.contacts}
        className={styles.mentor__actions}
      />
    </section>
  )
}

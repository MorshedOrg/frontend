import styles from './page.module.scss'
import ExpertiseSlider from '../components/ExpertiseSlider'
import { MentorsPageActions } from './components/MentorPageActions'

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

      <ExpertiseSlider className={styles.mentor__expertise} />

      <MentorsPageActions id={id} className={styles.mentor__actions} />
    </section>
  )
}

import clsx from 'clsx'
import styles from './page.module.scss'
import ExpertiseSlider from '../components/ExpertiseSlider'

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

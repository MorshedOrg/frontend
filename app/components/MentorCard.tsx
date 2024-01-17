import * as stylex from '@stylexjs/stylex'
import type { StyleXStyles } from '@stylexjs/stylex'
import { colors } from '../../configs/theme/variables.stylex'
import Link from 'next/link'

type MentorsCardProps = {
  id: number
  className?: string
  style?: StyleXStyles
}

const styles = stylex.create({
  card: {
    borderWidth: 1,
    display: 'flex',
    padding: '32px 24px',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: colors.gray1,
    marginRight: {
      ':not(:first-child)': 16,
    },
  },

  imageBox: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },

  image: {
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  name: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },

  jobTitle: {
    marginTop: 8,
    fontSize: 14,
    display: 'block',
    color: colors.gray,
  },

  cta: {
    fontSize: 14,
    marginTop: 20,
    borderRadius: 4,
    color: '#f5f5f5',
    padding: '10px 16px',
    backgroundColor: '#25b1bf'
  },
})

export default function MentorCard({ className, style }: MentorsCardProps) {
  return (
    <div className={className} {...stylex.props(styles.card, style)}>
      <div {...stylex.props(styles.imageBox)}>
        <img
          src="https://fastly.picsum.photos/id/1075/80/80.jpg?hmac=FpaK_MbL94lQkHE38K3bV0IdESHRuh5yQAJqTf1sdz8"
          alt=""
          {...stylex.props(styles.image)}
        />
      </div>

      <Link href="#" {...stylex.props(styles.name)}>
        یاسین سیلاوی
      </Link>

      <span {...stylex.props(styles.jobTitle)}>مشاور</span>

      <button {...stylex.props(styles.cta)}>مشاهده پروفایل</button>
    </div>
  )
}

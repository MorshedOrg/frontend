'use client'

import clsx from 'clsx'
import posthog from 'posthog-js'
import styles from './MentorPageActions.module.scss'

type MentorsPageActionsProps = {
  id: string
  className?: string
}

export function MentorsPageActions({ id, className }: MentorsPageActionsProps) {
  const onShareClick = () => {
    posthog.capture('share', { id })
  }

  const onCtaClick = () => {
    posthog.capture('cta', { id })
  }

  return (
    <div className={clsx(styles.actions, className)}>
      <a
        href={`https://telegram.me/share/url?url=https://morshedorg.github.io/frontend/mentors/${id}&text=اگه علاقه داری راجع‌به برنامه‌نویسی، نویسندگی یا روانشناسی گپ بزنی حتما یه سری به «یاسین سیلاوی» بزن`}
        rel="noopener noreferrer"
        target="_blank"
        className={clsx(
          styles['actions__action'],
          styles['actions__action--secondary']
        )}
        onClick={onShareClick}
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
        onClick={onCtaClick}
      >
        گپ بزنیم
      </a>
    </div>
  )
}

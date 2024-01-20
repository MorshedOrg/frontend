'use client'

import clsx from 'clsx'
import posthog from 'posthog-js'
import type { Contacts } from '@/types/mentor'
import styles from './MentorPageActions.module.scss'

type MentorsPageActionsProps = {
  id: string
  name: string
  expertise: string[]
  contacts: Contacts
  className?: string
}

export function MentorsPageActions({
  id,
  name,
  expertise,
  contacts,
  className,
}: MentorsPageActionsProps) {
  const onShareClick = () => {
    posthog.capture('share', { id })
  }

  const onCtaClick = () => {
    posthog.capture('cta', { id })
  }

  const generateTelegramShareUrl = (
    id: string,
    name: string,
    expertise: string[]
  ) => {
    return `https://telegram.me/share/url?url=https://morshedorg.github.io/frontend/mentors/${id}&text=اگه علاقه داری راجع‌به ${expertise.join(' یا ')} گپ بزنی حتما یه سری به «${name}» بزن`
  }

  return (
    <div className={clsx(styles.actions, className)}>
      <a
        href={generateTelegramShareUrl(id, name, expertise)}
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
        href={contacts.telegram}
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

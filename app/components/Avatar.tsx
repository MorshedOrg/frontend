import clsx from 'clsx'

type AvatarProps = {
  src: string
  alt: string
  size?: 'sm' | 'md'
  className?: string
}

function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  return (
    <div
      className={clsx(
        className,
        'rounded-full overflow-hidden w-6 h-6 relative'
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-[100%] h-[100%] top-0 right-0 absolute object-cover"
      />
    </div>
  )
}

export default Avatar

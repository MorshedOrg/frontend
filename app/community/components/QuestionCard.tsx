import clsx from 'clsx'
import Avatar from '@/app/components/Avatar'

const title = `چطوری واقعا نه بگیم؟ چطوری بدونیم به چی نه بگیم؟`

const text = `راستش من توی نه گفتن اصلا خوب نیستم. توی چیزای واضح منظورم نیستا، منظورم
وقتیه که یه موقعیتی پیش میاد و کلا با برنامه‌های من تفاوت داره و چون بهش
فکر نکردم میگم اره، مثلا قراره امروز برم خونه و روی ارتقا شخصی خودم کار
کنم ولی یهو یه نفر میاد و میگه بریم بیرون؟ منم میگم بریم! شما چطوری به
این موقعیت‌ها نه میگین؟`

function QuestionCard({ className }: { className?: string }) {
  return (
    <div className={clsx(className, 'bg-white')}>
      <a href="#" title={title} className="font-bold">
        {title.split(' ').slice(0, 13).join(' ')}{' '}
        {title.split(' ').length > 13 ? '...' : ''}
      </a>

      <p className="text-sm text-gray-600 mt-2">
        {text.split(' ').slice(0, 13).join(' ')}{' '}
        {text.split(' ').length > 13 ? '...' : ''}
      </p>

      <div className="flex mt-4">
        <Avatar
          src="https://picsum.photos/100/100"
          alt="Avatar 1"
          className="ml-[-12px]"
        />

        <Avatar
          src="https://picsum.photos/101/101"
          alt="Avatar 2"
          className="ml-[-12px]"
        />

        <Avatar src="https://picsum.photos/102/102" alt="Avatar 3" />
      </div>
    </div>
  )
}

export default QuestionCard

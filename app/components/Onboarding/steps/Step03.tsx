type Step03Props = {
  onChange: () => void
}

function Step03({ onChange }: Step03Props) {
  return (
    <div>
      <div className="bg-cyan-500 h-[60vh]"></div>

      <div className="p-12">
        <h1 className="text-black font-bold text-xl w-[200px]">
          الان دیگه وقتشه انجامش بدی
        </h1>

        <span className="block text-gray-600 text-sm mt-3 w-[180px]">
          دوست داری نقاشی بکشی؟ امروز تجربه‌اش کن!
        </span>

        <button className="outline-none font-semibold mt-12" onClick={onChange}>
          برو
        </button>
      </div>
    </div>
  )
}

export default Step03

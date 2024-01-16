type Step02Props = {
  onChange: () => void
}

function Step02({ onChange }: Step02Props) {
  return (
    <div>
      <div className="bg-green-500 h-[60vh]"></div>

      <div className="p-12">
        <h1 className="text-black font-bold text-xl ml-20">
          همیشه یاد دادن مدرک نمیخواد
        </h1>

        <span className="block text-gray-600 text-sm mt-3 ml-16">
          اینجا کلی آدم هستن که دوست دارن ازت یاد بگیرن
        </span>

        <button className="outline-none font-semibold mt-12" onClick={onChange}>
          بعدی
        </button>
      </div>
    </div>
  )
}

export default Step02

type Step01Props = {
  onChange: () => void
}

function Step01({ onChange }: Step01Props) {
  return (
    <div>
      <div className="bg-yellow-500 h-[60vh]"></div>

      <div className="p-12">
        <h1 className="text-black font-bold text-xl w-[200px]">
          فقط چنتا کلیک با تجربه فاصله داری
        </h1>

        <span className="block text-gray-600 text-sm mt-3 w-[200px]">
          اینجا پره از کلی آدم‌های با تجربه‌ و داستان‌های خفن
        </span>

        <button className="outline-none font-semibold mt-12" onClick={onChange}>
          بعدی
        </button>
      </div>
    </div>
  )
}

export default Step01

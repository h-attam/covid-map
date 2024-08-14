import { IoWarning } from "react-icons/io5"

const Error = ({info,retry}) => {
  return (
    <div className="col-span-3 w-full flex flex-col gap-6 md:min-w-[500px] ">
      <div className="flex items-center gap-4 bg-red-500 p-5 rounded-md">
      <IoWarning className="text-4xl" />
      <div>
        <h2>Üzgünüz bir hata oluştu</h2>
        <p>{info} </p>
      </div>
      </div>

      <button className="border text-gray-600 transition hover:bg-gray-100 p-2 rounded-md" onClick={retry} >Tekrar Dene</button>
    </div>
  )
}

export default Error
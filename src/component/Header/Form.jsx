import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    navigate(`/detail?q=${text}`);

  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center border rounded ">
        <input className="bg-transparent  p-1 px-2 md:px-5 outline-none" type="text" placeholder="Ülke ara..." />
        <button className="bg-green-500 p-[6px] text-xl w-full h-full rounded transition hover:bg-green-600">
            <CiSearch/>
        </button>
    </form>
  )
}

export default Form
import { FaGithub } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

export default function HeaderComponent() {

  return (
    <header className="w-full fixed h-16 flex justify-between items-center p-7">
      <div className="flex items-center justify-center text-xl font-semibold cursor-pointer gap-x-3" onClick={() => {
        window.location.href = "/"
      }} >
        <p className="text-violet-700" ><FaRegCircleUser /></p>
        <p>UserFlow</p>
      </div>
      <a href="https://github.com/jhenriquem/" target="_blank">< FaGithub /> </a>
    </header>)
}

import { FaGithub } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

export default function HeaderComponent() {

  return (
    <header className="w-full h-16 flex justify-between items-center p-7">
      <p className="text-xl font-semibold flex items-center gap-x-3 cursor-pointer" onClick={() => {
        window.location.href = "/"
      }}><FaRegCircleUser /> UserFlow</p>
      <a href="https://github.com/jhenriquem/" target="_blank">< FaGithub /> </a>
    </header>)
}

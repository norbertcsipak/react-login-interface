import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex justify-center m-3 gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/norbertcsipak" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/norbertcsipak" target="_blank">
        <FaInstagram />
      </a>
      <a href="https://github.com/norbertcsipak" target="_blank">
        <FaGithub />
      </a>
    </div>
  )
}

export default SocialMedia;

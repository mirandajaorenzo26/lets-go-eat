import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="flex w-full flex-col items-center gap-2 text-center">
      <div className="text-center">
        <p className="text-xs">Designed and Developed by </p>
        <p className="text-2xl font-bold">Jao Renzo Miranda</p>
      </div>

      <div
        className="flex gap-2 text-sm
            "
      >
        <p>Connect with me: </p>
        <a
          href="https://linkedin.com/in/mirandajaorenzo"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:scale-105"
        >
          <AiFillLinkedin size={24} />
          LinkedIn
        </a>
        <a
          href="https://github.com/mirandajaorenzo26"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:scale-105"
        >
          <AiFillGithub size={24} />
          GitHub
        </a>
      </div>
      <p className="text-sm text-gray-400">
        Copyright &copy; 2023 Jao Renzo Miranda. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

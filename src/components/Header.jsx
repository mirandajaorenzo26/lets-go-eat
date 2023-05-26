import { FiSettings } from "react-icons/fi";
function Header() {
  return (
    <div className="my-5 flex justify-between">
      <span className="w- text-2xl font-bold">let&apos;s go eat.</span>

      <FiSettings size={24} />
    </div>
  );
}

export default Header;

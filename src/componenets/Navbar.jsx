import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-o" : -translate - y - full}`}
      >
        <div className="flex gap-2 items-center ">
          <img src={Logo} alt="logo" className="w-18 h-18" />
          <div className="text-2xl font-bold hidden sm:block">
            Priyanshu Gupta
          </div>
        </div>
        <div className="block lg:absolute right-0 lg:transform-x-1/2 mr-15 text-3xl focus:outline-none">
          <button
            onClick={() => {
            setMenuOpen(true);
            }}
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      <OverlayMenu isopen={menuOpen} onclose={() => setMenuOpen(false)} />
    </>
  );
}

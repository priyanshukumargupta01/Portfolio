import { useState } from "react";
import OverlayMenu from "./OverlayMenu"
import Logo from "../assets/Logo.png"

export default function Navbar(){
    const [menuOpen , setMenuOpen]= useState(false);
    const [visible, setVisible] = useState(true)

    return(
      <>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-o" : -translate-y-full}`}> 

        <div className="flex gap-2 items-center">
          <img src={Logo} alt="logo" className="w-18 h-18"/>
          <div className="text-2xl">Priyanshu Gupta</div>
        </div>
      </nav>
      <OverlayMenu />
      </>
    )
  
}
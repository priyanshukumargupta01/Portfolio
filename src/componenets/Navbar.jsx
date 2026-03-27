import { useState } from "react";
import OverlayMenu from "./OverlayMenu"


export default function Navbar(){
    const [menuOpen , setMenuOpen]= useState(false);
    const [visible, setVisible] = useState(true)

    return(
      <>
      <nav className={`fixed top-0 left-0 `}> 
      </nav>
      <OverlayMenu />
      </>
    )
  
}
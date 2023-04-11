import React, { useState } from "react"

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Header/Menu/MenuOverlay";

import "../../global.css";

const Layout = ({ children }) => {
  const [isOpened, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!isOpened);
  };
  
  return (
    <div>
      <Header isOpened={isOpened} openHandler={openHandler}/>
      <Menu isOpened={isOpened} openHandler={openHandler} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
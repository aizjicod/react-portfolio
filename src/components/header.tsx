import { useState } from "react";

const Header = () => {
  const [
    clicked, ChangeClicked
  ] = useState(false)
  const handleOnClick = () => {
    ChangeClicked((prev) => !prev)
  }

  return (
    <header id="app-header">
      <div><a href="#headlines">Aiziji</a></div>
      <ul id="header-ul">
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <div className={`mb burger-btn ${clicked ? 'close' : ''}`.trim()} onClick={handleOnClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="header-ul" className={`mb ${clicked ? 'show' : ''}`.trim()}>
        <li> <a href="#headlines" onClick={handleOnClick}>Home</a></li>
        <li> <a href="#projects" onClick={handleOnClick}>Portfolio</a></li>
        <li><a href="#about" onClick={handleOnClick}>About</a></li>
        <li><a href="#contact" onClick={handleOnClick}>Contact Me</a></li>
      </ul>
    </header>
  )
}

export default Header

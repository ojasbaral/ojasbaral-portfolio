import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true)
  return (
    <div className="small nav w-screen text-white fixed top-0 right-0">
        <div className="bar max-w-[1560px] m-auto flex justify-between p-4 items-center">
            <div className="flex justify-between items-center w-full pl-4">
            <div className="font-bold text-xl text-dblue">Ojas Baral</div>
            {collapsed?<AiOutlineMenu size={23} className="menu visible md:invisible cursor-pointer" onClick={() => collapsed?setCollapsed(false):setCollapsed(true)}></AiOutlineMenu>:<AiOutlineClose  size={23} className="menu visible md:invisible cursor-pointer" onClick={() => collapsed?setCollapsed(false):setCollapsed(true)}></AiOutlineClose>}
            </div>
            <ul className={' elements header-drop-down-enter flex list sm:justify-between sm:items-center md:gap-4 gap-2 pt-2 text-center text-base w-full sm:w-auto'}>
                <li className="hover:underline w-full p-2 cursor-pointer rounded"><a href="#about" className="" onClick={() => setCollapsed(true)}>About</a></li>
                <li className="hover:underline w-full p-2 cursor-pointer rounded"><a href="#experience" onClick={() => setCollapsed(true)}>Experience</a></li>
                <li className="hover:underline w-full p-2 cursor-pointer rounded"><a href="#projects" onClick={() => setCollapsed(true)}>Projects</a></li>
                <li className="hover:underline w-full p-2 cursor-pointer rounded"><a href="#additional" onClick={() => setCollapsed(true)}>Additional</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
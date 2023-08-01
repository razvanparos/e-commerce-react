import MenuButton from '../../menubutton/menubutton';
import './sidemenu.css';
import React,{useEffect, useState} from 'react';


function SideMenu(props) {

    const [isOpen, setIsOpen]= useState(props.isOpen)

    function closeMenu(){
        props.closeSideMenu();
    }

    useEffect(() => {
        setIsOpen(props.isOpen)
      }, [props.isOpen]);
  


  return (
    <div className={`side-div ${ isOpen ? "open-animation":"close-animation"}`}>
        <button className='x' onClick={closeMenu}>X</button>
        <div className='side-menu-buttons'>
          <MenuButton text={'Collections'}/>
          <MenuButton text={'Men'}/>
          <MenuButton text={'Women'}/>
          <MenuButton text={'About'}/>
          <MenuButton text={'Contact'}/>
        </div>
    
    <div className='blur'>

    </div>
    </div>
  );
}

export default SideMenu;

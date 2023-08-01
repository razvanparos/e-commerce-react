import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './header/header';
import SideMenu from './header/side-menu/sidemenu';
import ImgViewer from './imgview/imgview';
import Product from './product/producs';

function App() {

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [cartAmount, setCartAmount] = useState(0); 
  

  function openSideMenu(){
    setSideMenuOpen(true);
  }
  function closeSideMenu(){
    setSideMenuOpen(false);
  }

  function addToCart(amt){
    setCartAmount(cartAmount+amt)
  }
  function handleTrash(){
    setCartAmount(0)
  }
 

  return (
    <div className="app-div">
      <Header openSideMenu={openSideMenu} qty={cartAmount} handleTrash={handleTrash}/>
      <SideMenu isOpen={sideMenuOpen} closeSideMenu={closeSideMenu}/>
      <div className='main-content'>
        <ImgViewer/>
        <Product price={125} addToCart={addToCart}/>
      </div>
      
    
    </div>
  );
}

export default App;

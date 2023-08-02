import MenuButton from '../menubutton/menubutton';
import './header.css';
import React, {useState,useEffect,useRef} from 'react';
import { FaUserAlt } from "react-icons/fa";
import img1 from '../images/image-product-1.jpg';
import { BsFillTrashFill } from "react-icons/bs";





function Header(props) {
  const cartSummaryRef = useRef(null);
  const [cartAmount, setCartAmount] = useState(props.qty);
  const [isOpen, setIsOpen] = useState(false)

  function openSideMenu(){
      props.openSideMenu();
  }

  function openSummary(even){
    even.stopPropagation();
    if(isOpen===false){setIsOpen(true);}else setIsOpen(false)
    
  }
  function handleTrash(){
    props.handleTrash()
  }


  
  useEffect(() => {
    setCartAmount(props.qty)
  }, [props.qty]); 

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartSummaryRef.current && !cartSummaryRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
 

  return (
    <div className="header-div">
        <div className='logo-div'>
            <button className='menu-btn' onClick={openSideMenu}><img src={require('../images/icon-menu.svg').default} alt="" /></button>
            <img src={require('../images/logo.svg').default} alt="" />
            <div className='menu-buttons'>
              
                <MenuButton text={'Collections'}/>
                <MenuButton text={'Men'}/>
                <MenuButton text={'Women'}/>
                <MenuButton text={'About'}/>
                <MenuButton text={'Contact'}/>
              

            </div>
        </div>
        <div className='cart-div'>
            <button onClick={openSummary} className='cart-btn'><img src={require('../images/icon-cart.svg').default} alt="" /></button>
            <button className='profile-btn' style={{color:'hsl(219, 9%, 45%)'}}> <FaUserAlt/></button>
            <span className='cart-amount'>{cartAmount}</span>
            
            <div ref={cartSummaryRef} className={`cart-summary ${isOpen ? 'cart-open':''}`}  >
              <div style={{rowGap:'20px', margin:'20px', display:'flex', flexDirection:'column',justifyContent:'space-between',height:'100px'}}>
                <p>Cart</p>
                
                <div className={`${cartAmount===0 ? 'hidden' : 'flex'}`} style={{ alignItems:'center', rowGap:'15px'}}>
                  <div style={{display:'flex',columnGap:'20px',}}>
                    <img style={{width:'40px',borderRadius:'10px'}}  src={img1} alt="" />
                    <div>
                      <p style={{fontSize:'10px', marginBottom:'5px'}}>Fall Limited Edition Sneakers</p>
                      <h4 style={{fontSize:'10px', display:'flex',columnGap:'10px'}}>$125.00 x {cartAmount} <p style={{fontWeight:'700',width:'fit-content'}}>${125*cartAmount}</p></h4>
                    </div>
                  <button onClick={handleTrash}  style={{color:'gray'}}><BsFillTrashFill/></button>
                  </div>
                  <button className='checkout'>Checkout</button>
                </div>
                <div className={`${cartAmount===0 ? 'flex' : 'hidden'}`} style={{alignSelf:'center', marginBottom:'10px'}}>
                  <p>
                    Your cart is empty.
                  </p>
                </div>
              </div>
               <p className='cart-line'></p>
            </div>
        </div>
      <p className='line'></p>

    </div>
    
  );
}

export default Header;

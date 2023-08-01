import './product.css';
import React,{useState} from 'react';
import { BsCart3 } from "react-icons/bs";


function Product(props) {

    const [amount, setAmount] = useState(0);

    function plus(){

        setAmount(amount+1);
    }
    function minus(){
        if(amount===0){return}
        setAmount(amount-1);
    }

    function addToCart(){
        props.addToCart(amount)
    }

  return (
    <div className="product-div">
      <h3 style={{letterSpacing:'3px', color:'var(--Orange)'}}>SNEAKER COMPANY</h3>
        <p style={{fontSize:'3rem', fontWeight:'700',maxWidth:'450px'}} >Fall Limited Edition Sneakers</p>
        <p style={{maxWidth:'450px', lineHeight:'25px', color:'var(--Darkgrayishblue)'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='price-div'>
            <p style={{fontSize:'1.7rem', fontWeight:'700', display:'flex', alignItems:'center'}}>$ {props.price}.00
                <span style={{borderRadius:'5px', backgroundColor:'#FFEEE2', marginLeft:'20px', fontSize:'1rem',color:'var(--Orange)',padding:'4px'}}>50%</span>
            </p>
            <p style={{fontSize:'1.1rem', fontWeight:'700',marginTop:'10px', color:'var(--Grayishblue)',textDecoration:'line-through'}} >$250.00</p>
        </div>

        <div className='add-to-cart-div' style={{display:'flex', columnGap:'30px'}}>
            <div className='amount-div' style={{display:'flex', alignItems:'center',width:'fit-content',columnGap:'40px'}}>
                <button onClick={minus} style={{cursor:'pointer',border:'0px', backgroundColor:'transparent', color:'var(--Orange)', fontSize:'2rem',fontWeight:'700'}}>-</button>
                <p style={{height:'fit-content', marginTop:'7px', fontWeight:'700',width:'20px'}}>{amount}</p>
                <button onClick={plus} style={{cursor:'pointer',border:'0px', backgroundColor:'transparent', color:'var(--Orange)', fontSize:'2rem',fontWeight:'700'}}>+</button>
            </div>
            <button 
            className='to-cart'
            onClick={addToCart}
            style={{border:'0px', backgroundColor:'var(--Orange)'
            ,color:'white',borderRadius:'10px',padding:'10px 50px'
            ,fontWeight:'700', fontSize:'1.2rem', display:'flex',alignItems:'center', columnGap:'15px',cursor:'pointer'}}><BsCart3/>Add to cart</button>
        </div>
    </div>
      
  
  );
}

export default Product;

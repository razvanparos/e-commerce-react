import './imgview.css';
import React,{useState} from 'react';
import img1 from '../images/image-product-1.jpg';
import img2 from '../images/image-product-2.jpg';
import img3 from '../images/image-product-3.jpg';
import img4 from '../images/image-product-4.jpg';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";





function ImgViewer() {

    const [i, setI] = useState(0);
    let images = [img1,img2,img3,img4]

    function leftFunc(){
        if(i<1){
            return
        }
        setI(i-1);
    }
    function rightFunc(){
        if(i>=images.length-1){
            return
        }
        setI(i+1);
    }

    function handleImgClick(i){
        setI(i);
    }

  return (
    <div className="imgviewer-div">
        <div className='img-div'>
            <img className='product-img' src={images[i]} alt="" />
            <button onClick={leftFunc} className='left'><MdOutlineKeyboardArrowLeft/></button>
            <button onClick={rightFunc} className='right'><MdOutlineKeyboardArrowRight/></button>
            <div className='images-div'>
            {
            images.map((item, index) => (
                <div key={index} className={`${index===i ? "shadow": ''} `}>
                <img
                    key={index} 
                    className={`${index===i ? "active": ''} `}
                    onClick={() => handleImgClick(index)}
                    style={{ width: '120px', borderRadius: '20px', cursor: 'pointer' }}
                    src={images[index]}
                    alt=""
                    
                />
                </div>
             
            ))
          }
              
            </div>
        </div>
        
        
    </div>  
  );
}

export default ImgViewer;

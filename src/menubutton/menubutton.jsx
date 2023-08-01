import './menubutton.css';



function MenuButton(props) {

 function handleClick(){
        console.log(props.text)
 }

  return (
   
    <button className='menu-btns' onClick={handleClick}>{props.text}</button>
    
  );
}

export default MenuButton;

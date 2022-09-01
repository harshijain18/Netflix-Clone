// import React, { useState , useEffect} from 'react'
import './nav.css';
export function Nav() {
    // const[show , handleShow] = useState(false)
    // const transitionNavbar = () =>{
    //     if (window.scrollY > 100) 
    //     handleShow(true) // then show navbar
    
    //     else{
    //     handleShow(false)
    //      }
    // }
    // useEffect= (() => {
    //     window.addEventListener('scroll', transitionNavbar);
    //     return window.removeEventListener('scroll', transitionNavbar); // cleanup
    // },[])
  return (
    <div className ={`nav ${'show && nav-black'} `}>
        <div className='nav_contents'>
            <img className='nav-logo' src = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt =" "></img>    
            <img className='nav-avatar' src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt= "avatar"></img>
        </div>
    </div> )
}


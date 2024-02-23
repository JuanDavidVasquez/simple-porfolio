import React, { useEffect } from 'react';
import gsap from 'gsap/all';
import Nav from './Nav';

export default function Header() {
  
 useEffect(()=>{
  gsap.fromTo(".header",{
    y:"-100%",
    filter: "blur(10px)",
  },{
    duration:1.5,
    ease: "powe1.out",
    filter: "blur(0px)",
    y:"0%"

  })
 })

  return (
    <div className='fixed w-full z-50 header'>
      <Nav/>
    </div>
  );
}

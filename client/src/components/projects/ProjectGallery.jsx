import React, { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGallery() {

    const containerGalleryRef = useRef();


    useLayoutEffect(() => {
        
        let imgGallery = gsap.utils.toArray(".img-animation-gallery");
    
        
        
      }, []);


  return (
    <section className='proyect-Gallery  w-full col-span-10 col-start-2 overflow-hidden'>
        <h2>Project Gallery</h2>
        <div 
        ref={containerGalleryRef}
        className='flex gap-5 container-gallery-projects'
        >

            <img className="img-animation-gallery" src="img/skills/reactjs.png" alt="react" />
            <img className="img-animation-gallery" src="img/skills/javascript.png" alt="javascript" />
            <img className="img-animation-gallery" src="img/skills/laravel.png" alt="laravel" />
            <img className="img-animation-gallery" src="img/skills/mysql.png" alt="mysql" />

        </div>
    </section>
  )
}

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

export default function TypedTXT2() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Building the Effective, Adaptive Enterprise'],
      typeSpeed: 55,
      backSpeed: 0,       
      backDelay: 999999, 
      loop: false,        
      showCursor: false,  
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className="text-blue-600 font-semibold" />;
}

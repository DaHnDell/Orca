import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedTXT() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['OUR PASSION, YOUR POSSIBILITY'],
      typeSpeed: 45,
      backSpeed: 0,       
      backDelay: 999999, 
      loop: false,        
      showCursor: false,  
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className="text-blue-600 font-semibold" />;
}
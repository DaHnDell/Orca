import React, { useEffect, useState } from 'react'
import logo1 from "../../assets/company_ci_01.png"
import logo2 from "../../assets/company_ci_02.png"

export default function HeaderLogo() {
  const [showFirst, setShowFirst] = useState(true);
 useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-32 h-10 relative">
      <img
        src={logo1}
        alt="Logo 1"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
          showFirst ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={logo2}
        alt="Logo 2"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
          showFirst ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
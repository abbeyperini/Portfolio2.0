import React, { useState, useEffect } from 'react';
import { keepTheme } from '../utils/themes';
import NavBar from './NavBar';

function SingleWrapper({home, children}) {
  const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    if (!home) {
      keepTheme(setClassName)
    }
  }, [home, setClassName])

    if (!home) { 
      return (
      <div className={`App ${className}`}>
        <div className="main-container">
        <NavBar setClassName={setClassName}/>
          {children}
        </div>
      </div>
    )
  }
  return (
    <>
      {children}
    </>
  )
}

export default SingleWrapper;
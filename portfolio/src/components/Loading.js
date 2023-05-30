import React, { useState, useEffect } from 'react';
import {ReactComponent as ConstructionShiba} from '../images/construction-shiba-inu.svg'
import { keepTheme } from '../utils/themes';
import NavBar from './NavBar';

function Loading(props) {
  
  const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    keepTheme(setClassName)
  }, [setClassName])

  return (
    <div className={`App ${className}`}>
      <div className="loading-container">
        <NavBar setClassName={setClassName}/>
        <div className="container_shiba">
          <ConstructionShiba className="loading-graphic"/>
          <p>Blogs loading!</p>
        </div>
      </div>
    </div>
  )
}

export default Loading
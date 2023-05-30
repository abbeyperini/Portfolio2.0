import '../styles/errorAndLoading.css';
import React, { useState, useEffect } from 'react';
import {ReactComponent as ConfusedShiba} from '../images/confused-shiba-inu.svg'
import { keepTheme } from '../utils/themes';
import NavBar from './NavBar';

function Error() {

  const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    keepTheme(setClassName)
  }, [setClassName])

  return (
    <div className={`App ${className}`}>
      <div className="error-container">
      <NavBar setClassName={setClassName}/>
        <div className="container_shiba">
          <ConfusedShiba className="error-graphic"/>
          <p>Page Not Found</p>
        </div>
      </div>
    </div>
  )
}

export default Error
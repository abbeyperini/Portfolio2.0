import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';

function Toggle({setClassName}) {
    // false = dark mode because of the way I wrote the CSS
    const [active, setActive] = useState(false)
    // the opposite, for screenreaders
    const [ariaActive, setAriaActive] = useState(true)
    const theme = localStorage.getItem('theme')

    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light', setClassName)
        setActive(true)
        setAriaActive(false)
      } else {
        setTheme('theme-dark', setClassName)
        setActive(false)
        setAriaActive(true)
      }
    }

    const handleOnClick = () => {
      changeThemeAndToggle()
    }

    const handleKeypress = e => {
      if (e.code === "Enter") {
        changeThemeAndToggle()
      }
    }

    useEffect(() => {
      if (theme === 'theme-dark') {
        setActive(false)
        setAriaActive(true)
      } else if (theme === 'theme-light') {
        setActive(true)
        setAriaActive(false)
      }
    }, [theme])

    return (
      <div className="container--toggle">
        <input aria-label="dark mode toggle" role="switch" aria-checked={ariaActive} onKeyDown={handleKeypress} type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked={active} readOnly />
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
          dark mode toggle
        </label>
      </div>
    )
}

export default Toggle;
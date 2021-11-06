import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
    // false = dark mode because of the way I wrote the CSS
    const [active, setActive] = useState(false)
    let theme = localStorage.getItem('theme');

    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        setActive(true)
      } else {
        setTheme('theme-dark');
        setActive(false)
      }
    }

    const handleOnClick = () => {
      changeThemeAndToggle()
    }

    const handleKeypress = e => {
      changeThemeAndToggle()
    }

    useEffect(() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setActive(false)
      } else if (localStorage.getItem('theme') === 'theme-light') {
        setActive(true)
      }
    }, [theme])

    return (
      <div className="container--toggle">
        <input aria-label="dark mode toggle" role="switch" aria-checked="false" onKeyPress={handleKeypress} type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked={active} readOnly />
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
          dark mode toggle
        </label>
      </div>
    )
}

export default Toggle;
import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="container--toggle">
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}

export default Toggle;
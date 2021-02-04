import React from 'react';
import '../styles/toggle.css';
import setTheme from '../utils/themes';

function Toggle() {
    const handleOnClick = (props) => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    return (
        <div className="container--toggle">
            <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}

export default Toggle;
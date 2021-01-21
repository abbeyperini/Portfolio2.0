import React from 'react';
import '../toggle.css';

function Toggle() {
    return (
        <div className="container--toggle">
            <input type="checkbox" id="toggle" className="toggle--checkbox" />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}

export default Toggle;
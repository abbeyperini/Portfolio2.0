import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Single(props) {
    return (
        <CSSTransition
          classNames="single"
          in={props.condition}
          timein={500}
          timeout={300}
          unmountOnExit>
            {props.component}
          </CSSTransition>
    )
}

export default Single;
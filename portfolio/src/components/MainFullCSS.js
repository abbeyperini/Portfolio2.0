import React from 'react';
import { CSSTransition } from 'react-transition-group';

function MainFull(props) {
    return (
        <CSSTransition
          classNames="mainFull"
          in={props.condition}
          timein={500}
          timeout={300}
          unmountOnExit>
              {props.component}
          </CSSTransition>
    )
}

export default MainFull;
import React from 'react';
import {ReactComponent as ConstructionShiba} from '../images/construction-shiba-inu.svg'

function Loading() {
  return (
    <div className="container_error">
      <ConstructionShiba className="loading-graphic"/>
      <p>Blogs loading!</p>
    </div>
  )
}

export default Loading
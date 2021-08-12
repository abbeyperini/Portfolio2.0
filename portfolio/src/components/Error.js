import React from 'react';
import {ReactComponent as ConfusedShiba} from '../images/confused-shiba-inu.svg'

function Error() {
  return (
    <div>
      <ConfusedShiba />
      <p>There was an error! Try again later.</p>
    </div>
  )
}

export default Error
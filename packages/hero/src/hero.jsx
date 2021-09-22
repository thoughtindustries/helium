import React from 'react';

export { Hero };

function Hero(props, ref) {
  const imageSrc = props && props.img ? props.img : '';
  
  return (
    <div>
      {props.title && (
        <h2>{props.title}</h2>
      )}
      {imageSrc && (
        <img src={imageSrc}/>
      )}
    </div>
  )
}
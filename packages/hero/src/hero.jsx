import React from 'react';

export { Hero };

function Hero(props, ref) {
    const imageSrc = props && props.img ? props.img : '';
    
    return (
        <div>
            {imageSrc && (
                <img src={imageSrc}/>
            )}
        </div>
    )
}
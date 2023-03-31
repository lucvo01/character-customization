import React from 'react';

function Part({path, index, zIndex}) {

    return (

        <img src={`character/${path}/${index +1}.png`} alt="avatar" zIndex={zIndex}/>

    )
}

export default Part
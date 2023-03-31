import React from "react";
import Part from "./Part.js";

function Avatar({
  body,
  eyes,
  hair,
  mouth,
  facial_hair,
  eyebrows,
  earrings,
  hats,
  glasses,
  neckwear,
  clothing1,
  clothing2,
  clothing3,
  handleRandomize,
}) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <Part path="body" index={body} zIndex={0} />
        <Part path="eyes" index={eyes} zIndex={1} />
        <Part path="hair" index={hair} zIndex={2} />
        <Part path="mouth" index={mouth} zIndex={1} />
        {/* <Part path="facial_hair" index={facial_hair} zIndex={2} /> */}
        <Part path="eyebrows" index={eyebrows} zIndex={1} />
        <Part path="accessories/earrings" index={earrings} zIndex={3} />
        <Part path="accessories/hats" index={hats} zIndex={4} />
        <Part path="accessories/glasses" index={glasses} zIndex={3} />
        <Part path="accessories/neckwear" index={neckwear} zIndex={3} />
        <Part path="clothes/layer_1" index={clothing1} zIndex={2} />
        <Part path="clothes/layer_2" index={clothing2} zIndex={2} />
        <Part path="clothes/layer_3" index={clothing3} zIndex={2} />
      </div>

      <button className="random" onClick={handleRandomize}>Randomize</button>
    </div>
  );
}

export default Avatar;

import React, { useState, useEffect } from "react";
import "./App.css";
import PartList from "./components/PartList.js";
import Avatar from "./components/Avatar.js";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  // facial_hair: 17,
  eyebrows: 15,
  earrings: 32,
  hats: 28,
  glasses: 17,
  neckwear: 18,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  // const [facial_hair, setFacial_hair] = useState(0);
  const [eyebrows, setEyebrows] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [hats, setHats] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [random, setRandom] = useState(false);

  const handleRandomize = () => {
    setRandom(prevState => !prevState);
  }

  useEffect(() => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    // setFacial_hair(Math.floor(Math.random() * total.facial_hair));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setHats(Math.floor(Math.random() * total.hats));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  }, [random]);

  return (
    <div className="App">
      {/* Game title */}
      <div className="header">
        <h1>CHARACTER CUSTOMIZATION</h1>
        <div className="underlined"></div>
      </div>

      <div className="main">
        {/* Avatar display */}
        <div className="col1">
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            mouth={mouth}
            // facial_hair={facial_hair}
            eyebrows={eyebrows}
            earrings={earrings}
            hats={hats}
            glasses={glasses}
            neckwear={neckwear}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            handleRandomize={handleRandomize}
          />
        </div>

        {/* Part lists */}
        <div className="col2">
          <div className="list-section">
            <h2>Body</h2>
            <PartList path="body" total={total.body} handleClick={setBody} />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <PartList path="eyes" total={total.eyes} handleClick={setEyes} />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <PartList path="hair" total={total.hair} handleClick={setHair} />
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <PartList path="mouth" total={total.mouth} handleClick={setMouth} />
          </div>
          {/* <div className="list-section">
            <h2>Facial_hair</h2>
            <PartList
              path="facial_hair"
              total={total.facial_hair}
              handleClick={setFacial_hair}
            />
          </div> */}
          <div className="list-section">
            <h2>Eyebrows</h2>
            <PartList
              path="eyebrows"
              total={total.eyebrows}
              handleClick={setEyebrows}
            />
          </div>
          <div className="list-section">
            <h2>Earrings</h2>
            <PartList
              path="accessories/earrings"
              total={total.earrings}
              handleClick={setEarrings}
            />
          </div>
          <div className="list-section">
            <h2>Hats</h2>
            <PartList
              path="accessories/hats"
              total={total.hats}
              handleClick={setHats}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <PartList
              path="accessories/glasses"
              total={total.glasses}
              handleClick={setGlasses}
            />
          </div>
          <div className="list-section">
            <h2>Neckwear</h2>
            <PartList
              path="accessories/neckwear"
              total={total.neckwear}
              handleClick={setNeckwear}
            />
          </div>
          <div className="list-section">
            <h2>Clothing1</h2>
            <PartList
              path="clothes/layer_1"
              total={total.clothing1}
              handleClick={setClothing1}
            />
          </div>
          <div className="list-section">
            <h2>Clothing2</h2>
            <PartList
              path="clothes/layer_2"
              total={total.clothing2}
              handleClick={setClothing2}
            />
          </div>
          <div className="list-section">
            <h2>Clothing3</h2>
            <PartList
              path="clothes/layer_3"
              total={total.clothing3}
              handleClick={setClothing3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

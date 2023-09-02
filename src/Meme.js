import React from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    fetchData();
  }, []);

  function getMemeImage() {
    const url =
      allMemes[getRandomNumber(allMemes.length)].url ?? allMemes[2].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }
  // renders the component first the runs use effect block
  // hence first memesArray[2] is rendered while rendering component but
  // instantly useEffect's body runs and it agains renders random image

  // React.useEffect(() => {
  //   getMemeImage();
  // });

  function inputChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function getRandomNumber(n) {
    return Math.floor(Math.random() * (n + 1));
  }

  return (
    <main>
      <div className="meme-form">
        <input
          className="form-input"
          placeholder="Top Text"
          type="text"
          name="topText"
          onChange={inputChange}
          value={meme.topText}
        ></input>
        <input
          className="form-input"
          placeholder="Bottom Text"
          type="text"
          name="bottomText"
          onChange={inputChange}
          value={meme.bottomText}
        ></input>
        <button onClick={getMemeImage} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="" />
        <h2 className="memeText topText">{meme.topText}</h2>
        <h2 className="memeText bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

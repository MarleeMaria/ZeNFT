import "./App.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import data from "./output/metadata.json";

function App() {
  const [nft, setNft] = useState();
  const [image, setImage] = useState();
  const [rarity, setRarity] = useState([]);
  const [total, setTotal] = useState();

  const [cookies, setCookie] = useCookies(["click"]);
  const [disable, setDisable] = useState();

  const legend = {
    "ball-whistle": "13",
    "ballcap": "23",
    "blue-helmet": "13",
    "chef-hat": "13",
    "coffee": "13",
    "cut": "13",
    "dumbell": "13",
    "earing": "13",
    "electrician": "13",
    "food-platter": "25",
    "gas-mask": "1",
    "glasses": "13",
    "gloves": "13",
    "helmet-log": "3",
    "hotdog": "13",
    "iphone": "13",
    "juggling-balls": "13",
    "keys-green-tag": "23",
    "minner": "3",
    "paper-towel": "13",
    "pipe": "13",
    "pizza-guy": "13",
    "pizza": "13",
    "scissors": "13",
    "server": "13",
    "shears": "21",
    "turban": "13",
    "welder": "5",
    "welding mask": "2",
    "whistle": "1",
    "wrench": "29",
    "zen-glasses": "20",
    "blue": "100",
    "grey": "100",
    "greydiant": "66",
    "orange": "50",
    "zencolor": "100",
    "pale": "208",
    "tan": "208",
    "bald": "9",
    "black-bald-beard": "29",
    "black-beard-hair": "35",
    "black-flow": "29",
    "black-fro": "39",
    "blonde-bald-brow": "33",
    "blonde-bald": "29",
    "blonde-no-beard": "39",
    "blonde": "29",
    "female-brow": "29",
    "female-dark-brown-brow": "39",
    "full-hair-black": "39",
    "hair-brown": "29",
    "hijab": "9",
    "apron": "9",
    "blue shirt": "33",
    "blue top ombre": "39",
    "brown flannel": "9",
    "chef apron": "19",
    "green color top": "49",
    "green geo top": "39",
    "grey T shirt": "29",
    "lab coat": "19",
    "name tag T shirt": "29",
    "pink T": "39",
    "red flannel": "25",
    "suit": "29",
    "t shirt": "39",
    "brown-shoes-laces": "69",
    "brown-shoes": "80",
    "pink-shoes": "79",
    "rubber-boots": "30",
    "white-green-shoe": "79",
    "white-shoe": "79",
    "jar": "38",
    "platform": "140",
    "shadow": "238",
    "apple-watch": "38",
    "green-watch-white-face": "138",
    "green-watch": "240"
  }
;

  // useEffect(() => {

  // if (cookies.click){

  //   setDisable("disabled-link")

  //    import(`./output/${cookies.click}.png`).then((module) => {
  //     setImage(module.default);
  //   });
  // }  });
  // console.log(data)

  // function findRarety(){

  // }

  // console.log(rarity)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function roll() {
    const number = Math.floor(Math.random() * 406);
    setNft(number);

    import(`./output/${number}.png`).then((module) => {
      setImage(module.default);
    });

    const meta = data[number];

    const rarity = [];
    meta.attributes.forEach((element) =>
      rarity.push({
        trait_type: element.trait_type,
        trait_name: element.value,
        rarity: Number((legend[element.value] / 406).toFixed(3)),
      })
    );

    setRarity(rarity);

    let initialValue = 0;
    const total = rarity.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.rarity;
    }, initialValue);

    setTotal(total);

    setCookie("click", number, "/");
  }

  function claim() {
    setCookie("click", true, "/");

    setDisable("disabled-link");
  }
  // const table

  return (
    <div className="App">
      <br></br>
            <img src="https://s3.amazonaws.com/assets.zensurance.ca/zen-logo.png"></img>
      <h1>Welcome to ZeNFT</h1>
      <div>
        <h2>Click Below to roll for you ZeNFT</h2>
      </div>
      <br></br>
      <img src={image}></img>
      <br></br>

      {/* <button type="button" className="button" onClick={roll} className={disable}>
        ROLL!
      </button> */}

<button type="button" className="button" onClick={roll}><span>Roll!</span></button>

      {/* <p>{rarity.join(", ")}</p> */}

      {image && (
        <div className="center">

          <button className="button" >
             <span>
            <a type="button" href={image}  download onClick={claim}>
             Claim{" "}
            </a>
            </span>
          </button>
          <h1>Rarity Break Down</h1>

          <table>
            <tr className="tableheader">
              <td>Trait</td>
              <td>Trait Name</td>
              <td>Rarity</td>
            </tr>
            {rarity.map(({ trait_type, trait_name, rarity }) => (
              <tr>
                <td> {capitalizeFirstLetter(trait_type)} </td>
                <td> {capitalizeFirstLetter(trait_name)} </td>
                <td> {rarity}</td>
              </tr>
            ))}

            <tr className="center">
              <td colspan="3">Total Rarity: {total.toFixed(3)}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
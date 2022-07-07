import './App.css';
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
function App() {


  
const [nft, setNft]=useState()
const [image, setImage]=useState()

const [cookies, setCookie ] = useCookies(['click']);
const [disable, setDisable ] = useState();


console.log(cookies.click)


// useEffect(() => {

// if (cookies.click){
//   setDisable("disabled-link")
// }  });


function roll(){
  const number = Math.floor(Math.random() * 416)
  setNft(number)

    import(`./output/${number}.png`).then((module) => {
    setImage(module.default);
  });

}

function claim(){

   setCookie('click', true, "/")

setDisable("disabled-link")

}





  return (
    <div className="App">
        <h1>
          Welcome to ZeNFT
        </h1>
       <div><h2>Click Below to roll for you ZeNFT</h2></div>
        <br></br>
      <img src={image} ></img>
        <br></br>

     <button type="button" onClick={roll}>ROLL!</button>
<button>
     <a type="button" 
     href={image}
     download
     onClick={claim}
class={disable}
       >Claim (this can only be done once)</a>
    </button>

    </div>
  );
}

export default App;

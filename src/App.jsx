import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import AvailableBtn from "./Components/AvailableBtns/AvailableBtn";
import { toast, ToastContainer } from "react-toastify";
import Players from "./Components/Players/Players";
import Selected from "./Selected/Selected";


function App() {
  // add coin in your account
  const [coinAdd, setCoinAdd] = useState(0); 
  // active Btn and selectedBTN component 
  const [SelectedActiveBtn, setSelectedActiveBtn] = useState("btn1");
  // selected players && delete Players
  const [selectedPlayers, setSelectedPlayers] = useState([]);



  // add coin in your account
  const handleCoin = () => {
    const newCoinAdd = coinAdd + 600000;
    setCoinAdd(newCoinAdd)
    toast.success("credit Added to your Account")
  }

  // player buy 
  const handleByePlayer = (p) => {
    const isAlreadySelected = selectedPlayers.some(player => player.id === p.id);
    // already in your squad
    if(isAlreadySelected){
       toast.error(`! ${p.player_name} is already in your squad.`);
      return
    }
    // select 6 players
  if (selectedPlayers.length >= 6) {
    toast.error("❌ You can only select 6 players.");
    return;
  }
    if(coinAdd > p.price){
      // buy player
      setCoinAdd(coinAdd - p.price);
        // Add player to selected list
    setSelectedPlayers([...selectedPlayers, p]);
      toast.success(`👏 Congrates ${p.player_name} is now in your squad.`)
      return
    }
    toast.error(" 💰 Not enough money to buy this plyer.  Claim some credit.");
  }

  // active Btn and selecte component 
  const handleSelectedActiveBtn = (value) => {
        setSelectedActiveBtn(value);
  }

  // DeletePlayer 
  const handleDeletePlayer = (id) => {
  const updatePlayers = selectedPlayers.filter(player => player.id !== id);
  setSelectedPlayers(updatePlayers);
  toast.warn("Player removed from your squad.");
}

  return (
    <>
      <Navbar coinAdd={coinAdd}></Navbar>
     <Banner handleCoin={handleCoin}></Banner>
     <AvailableBtn 
     SelectedActiveBtn={SelectedActiveBtn} 
     handleSelectedActiveBtn={handleSelectedActiveBtn}
     selectedPlayers={selectedPlayers}></AvailableBtn>

     {
      SelectedActiveBtn === "btn1" ? <Players handleByePlayer={handleByePlayer}/> : <Selected
      selectedPlayers={selectedPlayers}
      handleDeletePlayer={handleDeletePlayer}
      handleSelectedActiveBtn={handleSelectedActiveBtn}/>
     }
    
    
     <ToastContainer position="top-center"></ToastContainer>
    </>
  )
}

export default App

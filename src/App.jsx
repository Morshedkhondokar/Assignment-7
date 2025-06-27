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
  // active Btn and selecte component 
  const [SelectedActiveBtn, setSelectedActiveBtn] = useState("btn1");
  // add coin in your account
  const handleCoin = () => {
    const newCoinAdd = coinAdd + 600000;
    setCoinAdd(newCoinAdd)
    toast.success("credit Added to your Account")
  }

  // player buy
  const handleByePlayer = (p) => {
    if(coinAdd > p.price){
      
      setCoinAdd(coinAdd - p.price);
      toast.success(`Congrates !! ${p.player_name} is now in your squad.`)
      return
    }
    toast.error("!Not enough money to buy this plyer.    Claim some credit.");
  }

  // active Btn and selecte component 
  const handleSelectedActiveBtn = (value) => {
        setSelectedActiveBtn(value);
  }

  return (
    <>
      <Navbar coinAdd={coinAdd}></Navbar>
     <Banner handleCoin={handleCoin}></Banner>
     <AvailableBtn 
     SelectedActiveBtn={SelectedActiveBtn} 
     handleSelectedActiveBtn={handleSelectedActiveBtn}></AvailableBtn>

     {
      SelectedActiveBtn === "btn1" ? <Players handleByePlayer={handleByePlayer}/> : <Selected/>
     }
    
    
     <ToastContainer position="top-center"></ToastContainer>
    </>
  )
}

export default App

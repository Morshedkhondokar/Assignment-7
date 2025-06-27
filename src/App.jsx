import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import AvailableBtn from "./Components/AvailableBtns/AvailableBtn";
import { toast, ToastContainer } from "react-toastify";
import Players from "./Components/Players/Players";


function App() {
  const [coinAdd, setCoinAdd] = useState(0);
  const handleCoin = () => {
    const newCoinAdd = coinAdd + 600000;
    setCoinAdd(newCoinAdd)
    toast.success("credit Added to your Account")
  }

  return (
    <>
      <Navbar coinAdd={coinAdd}></Navbar>
     <Banner handleCoin={handleCoin}></Banner>
     <AvailableBtn></AvailableBtn>
    <Players></Players>
     <ToastContainer position="top-center"></ToastContainer>
    </>
  )
}

export default App

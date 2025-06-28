
const AvailableBtn = ({SelectedActiveBtn, handleSelectedActiveBtn,selectedPlayers}) => {

  return (
    <div className="max-w-[1280px] mx-auto sticky top-[71px] rounded-bl-xl rounded-br-xl bg-white/10 backdrop-blur-lg border-b border-white/20 h-12 z-10">
        <div className="flex justify-between items-center mt-10 md:mt-20 mb-8 ">
             <h1 className="text-[16px] pl-1 md:text-[20px] font-semibold">
              {SelectedActiveBtn === "btn1" ? "Available Players" : `Selected Player (${selectedPlayers.length}/6)`}
              </h1>
      <div>
        <button
          onClick={() => handleSelectedActiveBtn("btn1")}
          className={`border-r-0 px-1 py-2 md:py-3 md:px-5 bg-[#e7e7e7]  border rounded-l-xl  ${
            SelectedActiveBtn === "btn1"
              ? "bg-[#e7fe29] border-[#d2e727] font-semibold"
              : " border-[#e7e7e7] "
          } `}
        >
          Available
        </button>
        <button
          onClick={() => handleSelectedActiveBtn("btn2")}
          className={`border-r-0 px-1 py-2 md:py-3 md:px-5 bg-[#e7e7e7]  border rounded-r-xl
             ${SelectedActiveBtn === "btn2"
              ? "bg-[#e7fe29] border-[#d2e727] font-semibold"
              : " border-[#e7e7e7] " } `}
        >
          Selected ({`${selectedPlayers.length}`})
        </button>
      </div>
        </div>
     
      
    </div>
  );
};

export default AvailableBtn;

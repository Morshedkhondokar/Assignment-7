import { MdDeleteForever } from "react-icons/md";
const Selected = ({selectedPlayers,handleDeletePlayer,handleSelectedActiveBtn}) => {
    console.log(selectedPlayers)
    return (
         <div className="max-w-[1280px] my-10 mx-auto space-y-4">
      {selectedPlayers.length === 0 ? (
        <p className="flex justify-center items-center text-2xl h-[300px] text-gray-500">
            No players selected.</p>
      ) : (
        selectedPlayers.map((player, i) => (
            
          <div key={i} className="flex items-center justify-between border-2 border-[#e7e7e7] rounded-xl p-4">
            <div className="flex items-center gap-4">
              <img src={player.player_img} alt={player.player_name} className="w-16 h-16 object-cover rounded-full" />
              <div>
                <h2 className="font-semibold">{player.player_name}</h2>
                <p className="text-sm text-gray-500">{player.batting_style}</p>
              </div>
            </div>
            {/* delete btn */}
           <button
           onClick={ () => handleDeletePlayer(player.id)}
           className="text-4xl text-red-400"> <MdDeleteForever /></button>
          </div>
        ))
      )}

      
      <button
      onClick={() => handleSelectedActiveBtn("btn1")}
      
      className="bg-[#e7fe29] py-3 px-5  rounded-xl ml-2">Add More player</button>
   
    </div>
    );
};

export default Selected;
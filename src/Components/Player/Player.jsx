import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({player}) => {
    const {player_img,player_name,country,role,batting_style,bowling_style,price} = player
    return (
        <div className='w-[350px] md:w-[400px] h-[500px] p-5 border-2 border-[#e7e7e7] rounded-xl mx-auto'>
            <img className='rounded-xl mb-5 w-[350] h-[200px] bg-cover bg-center bg-no-repeat' src={player_img} alt="" />
            <div className="space-y-3">
                <div className="flex items-center gap-4 text-[20px] font-semibold text-[#424242]">
                    <FaUser />
                     <h2 className="font-bold"> {player_name}</h2>
                </div>
            
                {/* Countru */}
            <div className="flex justify-between items-center ">
                <div className="flex gap-3 items-center justify-center text-[#a3a3a3]"><FaFlag /> <p>{country}</p></div>
                <div className="py-2 px-4 bg-[#e7e7e7] rounded-xl tex-[14px]">{role}</div>
            </div>
            <hr />
            </div>
            <div className="space-y-4 mt-4">
                <h3 className="font-semibold">Rating</h3>
                <div className="flex justify-between">
                    <h3 className="font-semibold">{batting_style}</h3>
                    <h3>{bowling_style}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <h5 className="font-semibold">Price:${price}</h5>
                    <button className="py-2 px-4 border-2 border-[#e7e7e7] rounded-xl tex-[14px]
                    hover:bg-[#e7fe29] hover:border-[#d2e727]">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;
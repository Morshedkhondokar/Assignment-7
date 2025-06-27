
const Navbar = ({coinAdd}) => {
    return (
        <div className=" flex st justify-between max-w-[1280px] mx-auto 
        bg-white/10 backdrop-blur-lg 
        sticky top-0 px-6 z-10 ">
            <div>
                <img src="images/logo.png" alt="" />
            </div>
            <div className="flex gap-6 justify-center items-center">
                <ul className="flex gap-5 text-[#a1a1a1] font-bold hidden md:flex">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Teams</li>
                </ul>
                <div className="flex justify-center items-center gap-2 border border-[#e7e7e7] p-2 rounded-xl
                font-semibold">
                    {coinAdd} Coin
                    <img className="w-5 h-5" src="images/coin.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from "react";

const Banner = () => {
  return (
    <div
      className="max-w-[1280px] mx-auto h-[545px] rounded-xl bg-black  bg-[url(/images/bg-shadow.png)]
    flex justify-center items-center flex-col space-y-10 md:space-y-5"
    >
      <div className="">
        <img src="images/banner-main.png" alt="" />
      </div>
      <div>
        <h1 className="text-white text-[28px] md:text-[40px] font bold text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[20px] md:text-[24px] text-[#b8b8b8] text-center  my-5">
          Beyond Boundaries Beyond Limits
        </p>

        <div className="flex justify-center items-center">
          <button className="px-6 py-3 rounded-xl border-2 border-white text-black font-bold text-lg shadow-md bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-400 hover:from-pink-400 hover:to-yellow-500 transition duration-300">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const Form = () => {
  return (
    <div
      className="max-w-[1280px] mx-auto h-[350px] bg-[rgba(255, 255, 255, 0.15)]
        border-2 border-[#e6e7e7] p-3 md:p-6 relative top-40 rounded-xl bg-white/10 backdrop-blur-lg z-1
        "
    >
      <div
        className="border-2 border-[#e6e7e7] h-[320px]  md:h-[300px] rounded-xl bg-white
            bg-[url('images/bg-shadow.png')] flex justify-center items-center flex-col gap-3"
      >
        <h1 className="text-[32px] font-bold text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-[20px] text-center">
          Get the latest updates and news right in your inbox!
        </p>
        <div>
          <form action="" className="flex flex-col md:flex-row items-center gap-3">
            <input
              className="w-[300px] md:w-[400px] py-3 px-4 md:px-7 border-2 rounded-xl"
              type="email"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl border-2 border-white text-black font-bold text-lg shadow-md bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-400 hover:from-pink-400 hover:to-yellow-500 transition duration-300 ml-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

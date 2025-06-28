const Footer = () => {
  return (
    <div className="h-[1000px] md:h-[650px] bg-black pt-[250px]">
      <div className="max-w-[1280px] mx-auto h-[650px] px-2  md:h-[320px]">
        <div>
          <img className="w-[130px] h-[130px] mx-auto my-5 md:my-0 " src="images/logo-footer.png" alt="" />
        </div>

        <div className=" md:flex justify-between text-white space-y-10">
          <div className="w-[250px]">
            <h3 className="font-bold">About Us</h3>
            <p className="text-[#9b9da3] ">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="text-[#9b9da3] ">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Subscribe</h3>
            <p className="w-[250px] text-[#9b9da3] mb-2">Subscribe to our newsletter for the latest updates.</p>
            <form action="" >
              <div className="flex ">
                <input className="p-3 md:px-6 md:py-3 rounded-l-xl" type="email" placeholder="enter your email" />
              <button
                type="submit"
                className="px-6 py-3 rounded-r-xl  text-black font-bold text-lg shadow-md bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-400 hover:from-pink-400 hover:to-yellow-500 transition duration-300"
              >
                Subscribe
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-[#9b9da3] text-[14px] md:text-[20px] text-center mt-7">@2025 Buy Cricket Player All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

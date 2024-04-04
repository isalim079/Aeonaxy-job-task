import image from "../../assets/signUp.png";

const SignUp = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-20 h-screen">
                <div className="bg-[#F3D184]">
                    <div className="flex flex-col justify-center items-center h-screen">
                        <p className="text-4xl text-[#7c6735] font-bold">
                            Aeonaxy
                        </p>
                        <img className="w-3/5" src={image} alt="" />
                    </div>
                </div>
                <div className="">
                    <div className="pr-10">
                        <p className="mt-10 text-right mb-14">
                            Already a member?{" "}
                            <span className="text-blue-500 cursor-pointer">Sign In</span>
                        </p>
                        <p className="text-4xl font-semibold">
                            Sign up to Aeonaxy
                        </p>
                    </div>
                    <div className="mt-10">
                        <form className="w-full max-w-[65%]">

                            {/* input fields */}
                            <div className="grid grid-cols-2 gap-8 ">
                            <div>
                                <label className="font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id=""
                                    className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="font-semibold">User</label>
                                <input
                                    type="text"
                                    name="userName"
                                    id=""
                                    className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                    placeholder="Enter your user name"
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                    placeholder="Enter your email"
                                />
                            </div>
                            
                            <div className="col-span-2">
                                <label className="font-semibold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                    placeholder="6+ characters"
                                />
                            </div>
                            </div>
                            {/* input fields ended */}

                            <div className="mt-4 flex items-start gap-3">
                                <input type="checkbox" className=" w-8 h-8" name="" id="" />
                                <p className="text-sm">Creating an account means you're okay with our <span className="text-blue-500 cursor-pointer">Terms of Service, Privacy Policy</span>, and our default <span className="text-blue-500 cursor-pointer">Notification Settings</span></p>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="w-full max-w-[50%] py-2 bg-pink-600 text-white rounded-md">Create Account</button>
                            </div>
                            
                            <div className="mt-3 w-full max-w-[70%]">
                                <p className="text-xs text-gray-500">This site is protected by reCAPTCHA and the Google <span className="text-blue-500 cursor-pointer">Privacy Policy</span> and <span className="text-blue-500 cursor-pointer">Terms of Service</span> apply.</p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

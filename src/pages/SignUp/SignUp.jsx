/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from "react";
import image from "../../assets/signUp.png";
import CreateProfile from "./CreateProfile";
import BringsToAeonaxy from "./BringsToAeonaxy";
import VerifyMail from "./VerifyMail";

const SignUp = () => {
    const steps = ["signUp", "createProfile", "bringsToAeonaxy", "verifyMail"];

    const [activeSteps, setActiveSteps] = useState(0);
    const [completed, setCompleted] = useState({});
    const [signUpData, setSignUpData] = useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeSteps === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeSteps + 1;
        setActiveSteps(newActiveStep);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const userName = form.get("userName");
        const email = form.get("email");
        const password = form.get("password");
        const checkbox = form.get("checkbox");

        const userData = { name, userName, email, password, checkbox };
        setSignUpData(userData);
        handleNext();
    };
    // console.log(signUpData);

    return (
        <div className="">
            <div
                className={`${
                    activeSteps === 0 && "grid grid-cols-2 gap-20 h-screen"
                }`}
            >
                <div
                    className={`bg-[#F3D184] ${activeSteps !== 0 && "hidden"}`}
                >
                    <div className="pl-16 pt-10">
                        <p className="text-2xl  text-[#7c6735]">Aeonaxy</p>
                        <p className="text-4xl text-[#7c6735] font-bold w-full max-w-[80%] mt-7 mb-10">
                            Discover the world's top Designers & Creatives.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-3/5" src={image} alt="" />
                    </div>
                </div>
                <div className="">
                    <div className={`pr-10 ${activeSteps !== 0 && "hidden"}`}>
                        <p className="mt-10 text-right mb-14">
                            Already a member?{" "}
                            <span className="text-blue-500 cursor-pointer">
                                Sign In
                            </span>
                        </p>
                        <p className="text-4xl font-semibold">
                            Sign up to Aeonaxy
                        </p>
                    </div>
                    <div className={`${activeSteps === 0 && "mt-10"}`}>
                        <form onSubmit={handleSubmit}>
                            {activeSteps === 0 && (
                                <div className="w-full max-w-[65%]">
                                    {/* input fields */}
                                    <div className="grid grid-cols-2 gap-8 ">
                                        <div>
                                            <label className="font-semibold">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-semibold">
                                                User
                                            </label>
                                            <input
                                                type="text"
                                                name="userName"
                                                id="userName"
                                                className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                                placeholder="Enter your user name"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="font-semibold">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
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
                                                id="password"
                                                className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                                placeholder="6+ characters"
                                            />
                                        </div>
                                    </div>
                                    {/* input fields ended */}

                                    <div className="mt-4 flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            className=" w-8 h-8"
                                            name="checkbox"
                                            id="checkbox"
                                        />
                                        <p className="text-sm">
                                            Creating an account means you're
                                            okay with our{" "}
                                            <span className="text-blue-500 cursor-pointer">
                                                Terms of Service, Privacy Policy
                                            </span>
                                            , and our default{" "}
                                            <span className="text-blue-500 cursor-pointer">
                                                Notification Settings
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="w-full max-w-[50%] py-2 bg-pink-600 text-white rounded-md"
                                            // onClick={handleNext}
                                        >
                                            Create Account
                                        </button>
                                    </div>

                                    <div className="mt-3 w-full max-w-[70%]">
                                        <p className="text-xs text-gray-500">
                                            This site is protected by reCAPTCHA
                                            and the Google{" "}
                                            <span className="text-blue-500 cursor-pointer">
                                                Privacy Policy
                                            </span>{" "}
                                            and{" "}
                                            <span className="text-blue-500 cursor-pointer">
                                                Terms of Service
                                            </span>{" "}
                                            apply.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeSteps === 1 && (
                                <CreateProfile
                                    handleNext={handleNext}
                                    signUpData={signUpData}
                                />
                            )}

                            {activeSteps === 2 && (
                                <BringsToAeonaxy handleNext={handleNext} />
                            )}

                            {activeSteps === 3 && <VerifyMail />}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

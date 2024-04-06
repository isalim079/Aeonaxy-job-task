/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from "react";
import image from "../../assets/signUp.png";
import VerifyMail from "./VerifyMail";
import hire from "../../assets/hire.png";
import shareWork from "../../assets/shareWork.png";
import inspiration from "../../assets/inspiration.png";
import { BiSolidCameraPlus } from "react-icons/bi";

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

    /* create profile data */
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const profilePicture = form.get("profilePicture");
        const location = form.get("location");

        setSignUpData((prevData) => ({
            ...prevData,
            location,

            profilePicture,
        }));
        handleNext();
    };

    /* brings to aeonaxy data */
    const handleBrings = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const reasonForJoining1 = form.get("shareWork");
        const reasonForJoining2 = form.get("hireDev");
        const reasonForJoining3 = form.get("inspiration");
        console.log(reasonForJoining1);
        console.log(reasonForJoining2);
        console.log(reasonForJoining3);

        setSignUpData((prevData) => ({
            ...prevData,
            reasonForJoining1,
            reasonForJoining2,
            reasonForJoining3,
        }));
        handleNext();
    };

    console.log(signUpData);

    return (
        <div className="">
            <div
                className={`${
                    activeSteps === 0 && "grid md:grid-cols-2 md:gap-20 h-screen md:px-0 px-3"
                }`}
            >
                {/* sign up page right side */}
                <div
                    className={`bg-[#F3D184] ${activeSteps === 0 && 'md:block hidden'} ${activeSteps !== 0 && "hidden"}`}
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
                    <div className={`md:pr-10 ${activeSteps !== 0 && "hidden"}`}>
                        <p className="mt-10 text-right mb-14">
                            Already a member?{" "}
                            <span className="text-blue-500 cursor-pointer">
                                Sign In
                            </span>
                        </p>
                        <p className="text-2xl md:text-4xl font-semibold">
                            Sign up to Aeonaxy
                        </p>
                    </div>
                    <div className={`${activeSteps === 0 && "mt-10"}`}>
                        {/* ---------------- sign up page form ---------- */}
                        {activeSteps === 0 && (
                            <form
                                onSubmit={handleSubmit}
                                className="w-full md:max-w-[65%]"
                            >
                                {/* input fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 ">
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

                                    <div className="md:col-span-2">
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

                                    <div className="md:col-span-2">
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
                                        Creating an account means you're okay
                                        with our{" "}
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
                                        className="w-full md:text-base text-xs md:max-w-[50%] max-w-[40%] py-2 bg-pink-600 text-white rounded-md"
                                        // onClick={handleNext}
                                    >
                                        Create Account
                                    </button>
                                </div>

                                <div className="mt-3 w-full max-w-[70%]">
                                    <p className="text-xs text-gray-500">
                                        This site is protected by reCAPTCHA and
                                        the Google{" "}
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
                            </form>
                        )}
                        {/* ---------- sign up page form ended ------------ */}

                        {/* ----------- create profile form ------------ */}

                        {activeSteps === 1 && (
                            <form onSubmit={handleProfileSubmit}>
                                <div className="md:flex justify-center items-center md:h-screen my-10 md:my-0 px-3 md:px-0">
                                    <div>
                                        <div>
                                            <h1 className="text-2xl md:text-4xl font-semibold">
                                                Welcome! Let's create your
                                                profile
                                            </h1>
                                            <p className="text-gray-500 mt-4 text-sm md:text-base">
                                                Let others get to know you
                                                better! You can do these later
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="md:text-xl text-lg font-bold mt-5 md:mt-10 mb-4">
                                                Add an avatar
                                            </h3>
                                            <div className="flex md:flex-row flex-col items-center space-x-10">
                                                <div className="border-2 border-dashed border-gray-400 w-24 h-24 md:w-40 md:h-40 rounded-full flex justify-center items-center">
                                                    <BiSolidCameraPlus className="text-2xl md:text-4xl text-gray-500" />
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        className="z-10 flex opacity-0"
                                                        type="file"
                                                        name="profilePicture"
                                                        id="profilePicture"
                                                    />
                                                    <button className="absolute left-[27%] mt-4 md:mt-0 md:left-0 top-0 -z-10 text-xs md:text-base md:font-semibold bg-gray-300 px-4 py-2 rounded-md">
                                                        Choose Image
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="md:mt-20 mt-10 text-lg md:text-xl font-bold mb-2">
                                                Add your location
                                            </h3>
                                            <input
                                                type="text"
                                                name="location"
                                                id="location"
                                                className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans md:w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                                                placeholder="Enter a location"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                className="bg-pink-600 py-2 rounded-md mt-5 md:mt-10 text-sm text-white w-full max-w-[40%]"
                                                type="submit"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* -------------- create profile form ended ----------------- */}

                        {/* -------------- Brings to aeonaxy form --------------- */}

                        {activeSteps === 2 && (
                            <form
                                className="flex justify-center items-center my-10 px-3 md:px-0"
                                onSubmit={handleBrings}
                            >
                                <div>
                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className="md:text-4xl text-2xl font-semibold">
                                            What brings you to Aeonaxy?
                                        </h3>
                                        <p className="mt-4 text-gray-500 text-sm md:text-base">
                                            Select the options that best
                                            describe you. Don't worry, you can
                                            explore other options later
                                        </p>
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center gap-8 md:gap-16 md:px-20 md:mt-14 mt-8">
                                        <div className="border border-gray-300 p-3 md:p-10 rounded-md flex flex-col justify-center items-center">
                                            <img
                                                className="w-60"
                                                src={shareWork}
                                                alt=""
                                            />
                                            <p className="md:text-2xl text-lg font-bold text-center">
                                                I'm a developer looking to share
                                                my work
                                            </p>
                                            <input
                                                type="radio"
                                                name="shareWork"
                                                value="shareWork"
                                                id="shareWork"
                                                className="w-6 h-6 mt-4"
                                            />
                                        </div>
                                        <div className="border border-gray-300 p-3 md:p-10 rounded-md flex flex-col justify-center items-center">
                                            <img
                                                className="w-60"
                                                src={hire}
                                                alt=""
                                            />
                                            <p className="text-lg md:text-2xl font-bold text-center">
                                                I'm looking to hire a developer
                                            </p>
                                            <input
                                                type="radio"
                                                name="hireDev"
                                                value="hireDev"
                                                id="hireDev"
                                                className="w-6 h-6 mt-4"
                                            />
                                        </div>
                                        <div className="border border-gray-300 p-3 md:p-10 rounded-md flex flex-col justify-center items-center">
                                            <img
                                                className="w-60"
                                                src={inspiration}
                                                alt=""
                                            />
                                            <p className="text-lg md:text-2xl font-bold text-center">
                                                I'm looking for developer
                                                inspiration
                                            </p>
                                            <input
                                                type="radio"
                                                name="inspiration"
                                                value="inspiration"
                                                id="inspiration"
                                                className="w-6 h-6 mt-4"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button
                                            className="w-full bg-pink-600 text-white max-w-[70%] md:max-w-[15%] py-2 text-sm rounded-md mt-10"
                                            type="submit"
                                        >
                                            Finish
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* ------------- Brings to aeonaxy form ended ---------------- */}

                        {activeSteps === 3 && <VerifyMail />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

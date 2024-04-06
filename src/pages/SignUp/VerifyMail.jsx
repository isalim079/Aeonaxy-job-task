/* eslint-disable jsx-a11y/heading-has-content */
import Navbar from "../Navbar/Navbar";
import message from "../../assets/message.png";
import Footer from "../Footer/Footer";

const VerifyMail = () => {
    return (
        <div>
            <div className="hidden md:block">
            <Navbar />
            </div>
            <div className="text-center space-y-5 my-10 px-3 md:px-0 md:space-y-7 md:my-16">
                <h2 className="md:text-4xl text-2xl font-semibold">
                    Please verify your email...
                </h2>
                <div className="flex justify-center items-center">
                    <img className="md:w-32 w-20" src={message} alt="" />
                </div>
                <p className="text-gray-500 text-sm md:text-base">
                    Please verify your email address. We've sent confirmation
                    email to:
                </p>
                <p className="font-bold">account@refero.design</p>
                <p className="text-gray-500 text-sm md:text-base">
                    Click the confirmation link in that email to begin using
                    Aeonaxy
                </p>
                <div className="flex justify-center items-center">
                    <p className="text-gray-500 w-full md:max-w-[45%] text-sm md:text-base">
                        Didn't receive the email? Check your spam folder, it may
                        have been caught by a filter. If you still don't see it.
                        You can{" "}
                        <span className="text-pink-600 font-semibold cursor-pointer">
                            resend the confirmation email
                        </span>
                    </p>
                </div>
                <p className="text-gray-500 text-sm md:text-base">
                    Wrong email address?{" "}
                    <span className="text-pink-600 font-semibold cursor-pointer">
                        Change it.
                    </span>
                </p>
            </div>
            <div className="hidden md:block">
            <Footer />
            </div>
        </div>
    );
};

export default VerifyMail;

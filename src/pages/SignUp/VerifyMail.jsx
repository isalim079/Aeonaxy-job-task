/* eslint-disable jsx-a11y/heading-has-content */
import Navbar from "../Navbar/Navbar";
import message from "../../assets/message.png";
import Footer from "../Footer/Footer";

const VerifyMail = () => {
    return (
        <div>
            <Navbar />
            <div className="text-center space-y-7 my-16">
                <h2 className="text-4xl font-semibold">
                    Please verify your email...
                </h2>
                <div className="flex justify-center items-center">
                    <img className="w-32" src={message} alt="" />
                </div>
                <p className="text-gray-500">
                    Please verify your email address. We've sent confirmation
                    email to:
                </p>
                <p className="font-bold">account@refero.design</p>
                <p className="text-gray-500">
                    Click the confirmation link in that email to begin using
                    Aeonaxy
                </p>
                <div className="flex justify-center items-center">
                    <p className="text-gray-500 w-full max-w-[45%]">
                        Didn't receive the email? Check your spam folder, it may
                        have been caught by a filter. If you still don't see it.
                        You can{" "}
                        <span className="text-pink-600 font-semibold cursor-pointer">
                            resend the confirmation email
                        </span>
                    </p>
                </div>
                <p className="text-gray-500">
                    Wrong email address?{" "}
                    <span className="text-pink-600 font-semibold cursor-pointer">
                        Change it.
                    </span>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default VerifyMail;

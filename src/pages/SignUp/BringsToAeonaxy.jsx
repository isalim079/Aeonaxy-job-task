/* eslint-disable jsx-a11y/heading-has-content */

import hire from "../../assets/hire.png";
import shareWork from "../../assets/shareWork.png";
import inspiration from "../../assets/inspiration.png";

const BringsToAeonaxy = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-4xl font-semibold">
                        What brings you to Aeonaxy?
                    </h3>
                    <p className="mt-4 text-gray-500">
                        Select the options that best describe you. Don't worry,
                        you can explore other options later
                    </p>
                </div>
                <div className="flex items-center gap-16 px-20 mt-14">
                    <div className="border border-gray-300 p-10 rounded-md flex flex-col justify-center items-center">
                        <img className="w-60" src={shareWork} alt="" />
                        <p className="text-2xl font-bold text-center">
                            I'm a developer looking to share my work
                        </p>
                        <input type="radio" name="shareWork" value="shareWork" id="shareWork" className="w-6 h-6 mt-4" />
                    </div>
                    <div className="border border-gray-300 p-10 rounded-md flex flex-col justify-center items-center">
                        <img className="w-60" src={hire} alt="" />
                        <p className="text-2xl font-bold text-center">
                            I'm looking to hire a developer
                        </p>
                        <input type="radio" name="hireDev" value="hireDev" id="hireDev" className="w-6 h-6 mt-4" />
                    </div>
                    <div className="border border-gray-300 p-10 rounded-md flex flex-col justify-center items-center">
                        <img className="w-60" src={inspiration} alt="" />
                        <p className="text-2xl font-bold text-center">
                            I'm looking for developer inspiration
                        </p>
                        <input  type="radio" name="inspiration" value="inspiration" id="inspiration" className="w-6 h-6 mt-4" />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="w-full bg-pink-600 text-white max-w-[15%] py-2 text-sm rounded-md mt-10" type="submit">Finish</button>
                </div>
            </div>
        </div>
    );
};

export default BringsToAeonaxy;

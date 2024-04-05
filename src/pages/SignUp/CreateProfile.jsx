/* eslint-disable jsx-a11y/heading-has-content */

import { BiSolidCameraPlus } from "react-icons/bi";

const CreateProfile = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <div>
                        <h1 className="text-4xl font-semibold">Welcome! Let's create your profile</h1>
                        <p className="text-gray-500 mt-4">
                            Let others get to know you better! You can do these
                            later
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mt-10 mb-4">Add an avatar</h3>
                        <div className="flex items-center space-x-10">
                            <div className="border-2 border-dashed border-gray-400 w-40 h-40 rounded-full flex justify-center items-center">
                                <BiSolidCameraPlus className="text-4xl text-gray-500" />
                            </div>
                            <div className="relative">
                                <input
                                    className="z-10 flex opacity-0"
                                    type="file"
                                    name=""
                                    id=""
                                />
                                <button className="absolute left-0 top-0 -z-10 font-semibold bg-gray-300 px-4 py-2 rounded-md">
                                    Choose Image
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-20 text-xl font-bold mb-2">Add your location</h3>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            className="bg-gray-100 rounded-md mt-1 pl-4 h-12 font-normal font-comicSans w-full block focus:outline-none focus:border-2 focus:border-gray-400"
                            placeholder="Enter a location"
                        />
                    </div>
                    <div>
                        <button className="bg-pink-600 py-2 rounded-md mt-10 text-sm text-white w-full max-w-[40%]" type="button">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProfile;
